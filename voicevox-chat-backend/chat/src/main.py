from functions.chat_gpt import callChatGPT
from functions.voice_vox import textToVoice, playWav

if __name__ == "__main__":
    print("ずんだもんと会話したい内容を入力するのだ")
    playWav("system_wav/start.wav")
    while True:
        # 無限ループで会話を行う
        # 終了処理はCtrl+Z
        try:
            # ユーザからの入力を受け取る
            # print("あなた：")
            text = input()
            # 入力をChatGPTにわたす
            reply_chat_gpt = callChatGPT(text)
            # print("ずんだもん：")
            # print(reply_chat_gpt)
            # ChatGPTの回答を音声に変換
            audio_file = textToVoice(reply_chat_gpt)
            # wavファイル再生
            playWav(audio_file)
        except Exception as e:
            #エラー処理
            # print(e)
            print("エラーなのだ。もう一度内容を入力してほしいのだ")
            playWav("system_wav/error.wav")