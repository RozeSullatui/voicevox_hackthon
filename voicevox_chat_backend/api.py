from dotenv import load_dotenv
import os

from flask import Flask, request, jsonify,send_file
from chat.chat_gpt import callChatGPT
from chat.answerWav import playWav, makeWav

from api_helper import return_roleText

load_dotenv()

path = os.environ.get('PYTHONPATH')
basedir = os.path.dirname(__file__)
app = Flask(__name__)

past_messages_list = []
default_ID = 42
       
@app.route('/api',methods=['GET','POST'])
def api():
    global past_messages_list
    global default_ID
    speaker_ID = default_ID
    if request.method == "POST":

        try:
            data = request.get_json()
            text = data['post_text']
            
            answer = callChatGPT(
                text,
                return_roleText(speaker_ID),
                past_messages_list,
            )

            res = answer[0]
            # playWav(makeWav(res, speaker_ID))
            wavfile = makeWav(res, speaker_ID)
            response_result = {'result':res}
            response_wavfile = {'audio_file_name':wavfile}

            
            past_messages_list = answer[1]
            
            return jsonify(response_result),jsonify(response_wavfile)
        
        except Exception as e:
            res = "エラーなのだ。もう一度内容を入力してほしいのだ"
            wavfile = "chat/wav2/error.wav"
            response = {'result':res}
            response_wavfile = {'audio_file_name':wavfile}
            return jsonify(response),jsonify(response_wavfile)
    else:
        print(speaker_ID)
        past_messages_list = []
        return jsonify({"result":speaker_ID})

@app.route('/audio')
def get_audio():
    fpath= os.path.join(basedir, "chat/wav2/error.wav")
    return send_file(
        fpath, # オーディオファイルを読み込みます
    )

@app.route('/changeCharacter', methods=['GET','POST'])
def change_chara():
    global default_ID

    if request.method == "POST":
        try:
            data = request.get_json()
            default_ID = data['speaker_ID']
            speaker_ID = default_ID
            print(speaker_ID)
            return jsonify({"speaker_ID":speaker_ID})

        except Exception as e:
            res = "エラーなのだ。もう一度内容を入力してほしいのだ"
            response = {'result':res}
            return jsonify(response)

    else:
        default_ID = 3
        speaker_ID = default_ID
        print(speaker_ID)
        return jsonify({"GET":F"reset speaker_ID:3={speaker_ID}"})

app.run()