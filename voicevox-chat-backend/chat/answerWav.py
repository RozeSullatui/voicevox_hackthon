import simpleaudio
import json
import requests
import time
import os
basedir = os.path.dirname(__file__)

def makeWav(text, speaker_ID):
    ut = time.time()

    # 音声合成処理
    # audio_query (音声合成用のクエリを作成するAPI)
    query = requests.post("http://voicevox:50021/audio_query",
                        params={"text": text, "speaker": speaker_ID})
    # synthesis (音声合成するAPI)
    speaker = requests.post("http://voicevox:50021/synthesis",
                        params={"speaker": speaker_ID},
                        data=json.dumps(query.json()))
    # wavファイルに書き込み
    audio_file = os.path.join(basedir,f"wav/{speaker_ID}answer{ut}.wav")
    with open(audio_file, mode="wb") as f:
        f.write(speaker.content)

    return audio_file

def playWav(file):
    with open(file,"rb") as f:
        # wavファイル再生
        wav_obj = simpleaudio.WaveObject.from_wave_file(f)
        play_obj = wav_obj.play()
        # 音声が終わるまでストップ
        play_obj.wait_done()

# テスト用　いらない時はコメントアウト

makeWav("こんにちは！ずんだもんです", 42)
playWav(os.path.join(basedir,"wav/answer.wav"))
