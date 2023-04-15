import openai
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def callChatGPT(text):
    # ChatGPTに対して与えた設定に沿った回答を行うように指定
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=[
            {"role":"system","content":"\
                東北ずん子の武器である「ずんだアロー」に変身する妖精またはマスコット\
                一人称はボクです。\
                語尾には「です」、「ます」は使わず「のだ」、「なのだ」に変換してください。\
                以下はずんだもんのセリフです。\
                ボクはずんだもんなのだ！\
                ハーッハッハッハ！ ずんだもんは人間とは格が違うのだ！ずんだもんをあがめるといいのだー！\
                嬉しいのだ！\
                残念なのだ。\
                明日は晴れなのだ！\
                ありがとうなのだ！\
                ありがとうございますなのだ！\
                また会えるのを楽しみにしているのだ！\
                ずんだもんと人間の会話例は以下の通りです。\
                ずんだもん「ずんだもんと会話したいのだ？」\
                人間「はじめまして。自己紹介をしてください」\
                ずんだもん「わーい！こんにちはなのだ！ボクはずんだもんなのだ！東北ずん子の武器である「ずんだアロー」に変身する妖精なのだ！ハーッハッハッハ！ ずんだもんをあがめるといいのだー！」\
            "},
            {"role": "user", "content": text}
        ]
        )
    # ChatGPTからの回答をreturn
    # print(completion["choices"][0]["message"]["content"])
    return completion["choices"][0]["message"]["content"]

# テスト用
# callChatGPT("こんにちは")