import simpleaudio
import json
import requests

def makeWav(text):

    # 音声合成処理
    # audio_query (音声合成用のクエリを作成するAPI)
    query = requests.post("http://voicevox:50021/audio_query",
                        params={"text": text, "speaker": 1})
    # synthesis (音声合成するAPI)
    speaker = requests.post("http://voicevox:50021/synthesis",
                        params={"speaker": 1},
                        data=json.dumps(query.json()))
    # wavファイルに書き込み
    audio_file = "wav/answer.wav"
    with open(audio_file, mode="wb") as f:
        f.write(speaker.content)

    return audio_file

def playWav(file):
    with open(file,"rb") as f:
        # wavファイル再生
        wav_obj = simpleaudio.WaveObject.from_wave_file(f)
        play_obj = wav_obj.play()
        # 音声が終わるまでストップ
        # play_obj.wait_done()


# テスト用　いらない時はコメントアウト
# makeWav("こんにちは！ずんだもんです")
# playWav("wav/answer.wav")