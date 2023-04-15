import os
import sys


# プロジェクトのルートディレクトリを取得する
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# モジュール検索パスにプロジェクトのルートディレクトリを追加する
sys.path.insert(0, PROJECT_ROOT)

from flask import Flask,request,jsonify
from chat.src.functions.chat_gpt import callChatGPT
from chat.src.functions.answerWav import playWav,makeWav


app = Flask(__name__)

@app.route('/api',methods=['GET','POST'])
def api():
    try:
        data = request.get_json()
        text = data['post_text']

        res = callChatGPT(text)
        playWav(makeWav(text))
        response = {'result':res}
        return jsonify(response)
    except Exception as e:
        res = "エラーなのだ。もう一度内容を入力してほしいのだ"
        response = {'result':res}
        return jsonify(response)

app.run()