from flask import Flask, render_template, send_file, request, Response
import json
import os
import scratch
from uuid import uuid4

os.system("mkdir -p files")

app = Flask(__name__)

@app.route('/dashboard/', methods=['GET'])
def songs():
    songs,g=scratch.get_songs()
    json_songs = json.dumps(songs)
    return json_songs


#haven't editted yet but am working on it


if __name__ == "__main__":
    app.run(port=2500)

