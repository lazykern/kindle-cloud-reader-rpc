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
        if config["client_id"] == "":
            print("Please set your discord application client ID in config.json")
            exit()
except FileNotFoundError:
    config = {
        "client_id": "1017128628066209813",
        "port": 1231,
        "rpc":{
            "largeText": "Kindle",
            "instance": False,
            "library": {
                "details": "Browsing Library",
                "state": "Viewing {view}",
            }, "notebook": {
                "details": "Viewing Notebook",
                "state": "{bookTitle}",
            }, "book": {
                "details": "Reading Book | {currentPage} / {totalPages}",
                "state": "{bookTitle}",
            }
        }
    }

START_TIME = time.time()

CLIENT_ID = config.get("client_id")
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

        keys = {}

        location = request_json.get("location")

        if location == "library":
            keys["view"] = request_json.get("view")

        elif location == "notebook":
            keys["bookTitle"] = request_json.get("bookTitle")
            keys["highlightCount"] = request_json.get("highlightCount")
            keys["noteCount"] = request_json.get("noteCount")

        elif location == "book":
            keys["bookTitle"] = request_json.get("bookTitle")
            keys["currentPage"] = request_json.get("currentPage")
            keys["totalPages"] = request_json.get("totalPages")
            

        rpc_client.update(
            start=START_TIME,
            large_image="kindle",
            large_text=config["rpc"]["largeText"],
            details=config["rpc"][location]["details"].format(**keys),
            state=config["rpc"][location]["state"].format(**keys),
            instance=config["rpc"]["instance"]
        )


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
