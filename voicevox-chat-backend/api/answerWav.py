import simpleaudio
import json
import requests

def makeWav(text):

    # 音声合成処理
    # audio_query (音声合成用のクエリを作成するAPI)
    res1 = requests.post("http://voicevox:50021/audio_query",
                        params={"text": text, "speaker": 1})
    # synthesis (音声合成するAPI)
    res2 = requests.post("http://voicevox:50021/synthesis",
                        params={"speaker": 1},
                        data=json.dumps(res1.json()))
    # wavファイルに書き込み
    audio_file = "../wav_dir/answer.wav" # f"wav_dir/{ut}.wav"
    with open(audio_file, mode="wb") as f:
        f.write(res2.content)

    return audio_file

def playWav(file):
    with open(file,"rb") as f:
        # wavファイル再生
        wav_obj = simpleaudio.WaveObject.from_wave_file(f)
        play_obj = wav_obj.play()
        play_obj.wait_done()


# テスト用　いらない時はコメントアウト
answerWav("こんにちは！ずんだもんです")
playWav("../wav_dir/answer.wav")