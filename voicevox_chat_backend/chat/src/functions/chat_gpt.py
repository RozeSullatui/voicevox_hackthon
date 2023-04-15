import openai
from dotenv import load_dotenv
import os

load_dotenv(verbose=True)
dotenv_path = os.path.join(os.path.dirname(__file__),"../api/.env")
load_dotenv(dotenv_path)

openai.api_key = os.getenv("OPENAI_API_KEY")

def callChatGPT(reply_text, role_text_file):
    
    # role_text_fileをmessagesを読み込み
    with open(role_text_file, 'r') as file:
        dialogue = file.readlines()
    
    role_messages = []
    message = ""
    for line in dialogue:
        message += line
    
    role_messages.append({"role": "system", "content": message})
    role_messages.append({"role": "user", "content": reply_text})
    

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=role_messages
        )
    # ChatGPTからの回答をreturn
    return completion["choices"][0]["message"]["content"]