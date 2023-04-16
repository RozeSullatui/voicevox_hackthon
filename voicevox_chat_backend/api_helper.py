from pathlib import Path
import os

basedir = os.path.dirname(__file__)

# ここにIDとファイル名
role_textMap = {
    1 :"zundamon.txt",
    42:"odisan.txt",
    
}

def return_roleText(index):
    fname = role_textMap[index]
    fpath =  os.path.join(basedir, "chat/role_text" ,fname)

    return fpath

if __name__=="__main__":
    a = return_roleText(1)