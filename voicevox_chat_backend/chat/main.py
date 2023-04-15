from chat_gpt import callChatGPT
from answerWav import makeWav, playWav

if __name__ == "__main__":
    past_messages_list = []

    while True:
        # 無限ループで会話を行う
        # 終了処理はCtrl+Z
        try:
            # ユーザからの入力を受け取る
            text = input()
            # 入力をChatGPTにわたす
            answer = callChatGPT(text, "role_text/zundamon.txt", past_messages_list)
            reply_chat_gpt = answer[0]
            # ChatGPTの回答を音声に変換
            audio_file = makeWav(reply_chat_gpt, 1)
            print(reply_chat_gpt)
            # wavファイル再生
            playWav(audio_file)
            
            # past_message_listに今までの会話を代入
            past_messages_list = answer[1]
            
        except Exception as e:
            #エラー処理
            print(e)
