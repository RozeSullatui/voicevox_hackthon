from dotenv import load_dotenv
import os
import shutil
from flask import Flask, request, jsonify

from chat.chat_gpt import callChatGPT
from chat.answerWav import playWav, makeWav

load_dotenv()
path = os.environ.get('PYTHONPATH')

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
            
            answer = callChatGPT(text, "role_text/zundamon.txt")

            res = answer[0]
            playWav(makeWav(res, speaker_ID))
            response = {'result':res}
            
            past_messages_list = answer[1]
            
            return jsonify(response)
        
        except Exception as e:
            res = "エラーなのだ。もう一度内容を入力してほしいのだ"
            response = {'result':res}
            return jsonify(response)
    else:
        past_messages_list = []
        shutil.rmtree('wav')
        os.mkdir('wav')

app.run()