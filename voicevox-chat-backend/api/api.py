from flask import Flask,request

app = Flask(__name__)

@app.route('/api',methods=['GET','POST'])
def api():
    if request.method == "GET":
        return {
            'userId' : 1,
            'title' : 'Flask React Application',
            'completed': False
        }
    elif request.method == "POST":
        return {
            
        }

app.run()