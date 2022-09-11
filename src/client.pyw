import json
import html
import time
import urllib.request
import re
import http.server
from pypresence import Presence

try:
    with open("config.json", "r") as file:
        config = json.load(file)
except FileNotFoundError:
    config = {}

START_TIME = time.time()

CLIENT_ID = '1017128628066209813'
rpc_client = Presence(CLIENT_ID)
rpc_client.connect()

class RequestHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Access-Control-Allow-Methods","*")
        self.send_header("Access-Control-Allow-Headers","*")
        self.end_headers()

    def do_PUT(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Access-Control-Allow-Methods","*")
        self.send_header("Access-Control-Allow-Headers","*")
        self.end_headers()
        
        content_length = int(self.headers["Content-Length"])
        request_json = json.loads(html.unescape(self.rfile.read(content_length).decode('utf-8')))

        if "largeImageKey" in request_json:
            request_json["large_image"] = request_json.pop("largeImageKey")
        if "largeImageText" in request_json:
            request_json["large_text"] = request_json.pop("largeImageText")
        if "smallImageKey" in request_json:
            request_json["small_image"] = request_json.pop("smallImageKey")
        if "smallImageText" in request_json:
            request_json["small_text"] = request_json.pop("smallImageText")
        
        rpc_client.update(**request_json)

        print(request_json)

    def do_DELETE(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Access-Control-Allow-Methods","*")
        self.send_header("Access-Control-Allow-Headers","*")
        self.end_headers()

        rpc_client.clear()

server = http.server.ThreadingHTTPServer(('localhost', 1231), RequestHandler)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.socket.close()
