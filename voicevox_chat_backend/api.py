from dotenv import load_dotenv
import os
import shutil
import io
from flask import Flask, request, jsonify,send_file
from chat.chat_gpt import callChatGPT
from chat.answerWav import playWav, makeWav
load_dotenv()
path = os.environ.get('PYTHONPATH')
basedir = os.path.dirname(__file__)
app = Flask(__name__)

past_messages_list = []

@app.route('/api',methods=['GET','POST'])
def api():
    global past_messages_list
    
    speaker_ID = 1
    
    if request.method == "POST":
        try:
            data = request.get_json()
            text = data['post_text']
            
            answer = callChatGPT(text, "/home/voicevox_hackthon/voicevox_chat_backend/chat/role_text/zundamon.txt", past_messages_list)
            

            res = answer[0]
            # playWav(makeWav(res, speaker_ID))
            makeWav(res, speaker_ID)
            response = {'result':res}
            
            past_messages_list = answer[1]
            
            return jsonify(response)
        
        except Exception as e:
            res = "エラーなのだ。もう一度内容を入力してほしいのだ"
            response = {'result':res}
            return jsonify(response)
    else:
        past_messages_list = []
        # shutil.rmtree("/home/voicevox_hackthon/voicevox_chat_backend/chat/wav")
        # os.mkdir("chat/wav")
@app.route('/audio')
def get_audio():
    # オーディオファイルを読み込みます
    fpath= os.path.join(basedir, "chat/wav2/error.wav")
    with open(fpath, 'rb') as f:
        audio_data = f.read()
    # ファイルをレスポンスとして返します
    return send_file(
        fpath,
    )
app.run()