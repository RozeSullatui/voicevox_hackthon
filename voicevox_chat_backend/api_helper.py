from pathlib import Path
import os

basedir = os.path.dirname(__file__)

# ここにファイル名とID
role_textMap = {
    42:"ojisan.txt",
    3 :"zundamon.txt"
}




def Pathfinder(gate_paths):
    for path in gate_paths:
        if os.path.isfile(path):
            yield path
        else:
            with os.scandir(path) as temp_dir:
                entries = [Path(path)/entry.name for entry in temp_dir]
            yield from Pathfinder(entries)

def indexies():
    paths = [i for i in Pathfinder([os.path.join(basedir, "chat/role_text")])]
    list_text = {}
    for i in paths:
        with open(i) as f:
            list_text[F"{os.path.basename(i)}"] = f.read()
    return list_text

list_text = indexies()

def return_roleText(index):
    fname = role_textMap[index]
    return list_text[fname]

if __name__=="__main__":
    a = indexies()