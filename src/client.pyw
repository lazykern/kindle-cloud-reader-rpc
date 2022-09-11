import json
import html
import time
import http.server
from pypresence import Presence

CONFIG_PATH = "kindle_rpc_config.json"

try:
    with open(CONFIG_PATH, "r") as file:
        config = json.load(file)
        if config["client_id"] == "":
            print("Please set your discord application client ID in config.json")
            exit()
except FileNotFoundError:
    config = {
        "client_id": "1017128628066209813",
        "port": 1231,
        "default_image": False,
        "image_theme": "light", 
        "rpc": {
            "large_text": "Kindle",
            "instance": False,
            "library": {
                "details": "Browsing Library",
                "state": "Viewing {view}",
                "small_text": "Browsing Library",
            },
            "notebook": {
                "details": "Viewing Notebook",
                "state": "{bookTitle}",
                "small_text": "{highlightCount} highlights {noteCount} notes",
            },
            "book": {
                "details": "Reading Book | {currentPage} / {totalPages}",
                "state": "{bookTitle}",
                "small_text": "Reading Book",
            },
        },
    }
    with open("kindle_rpc_config.json", "w") as file:
        json.dump(config, file, indent=4)


START_TIME = time.time()

CLIENT_ID = config.get("client_id")
rpc_client = Presence(CLIENT_ID)
rpc_client.connect()


class RequestHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_PUT(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

        content_length = int(self.headers["Content-Length"])
        request_json = json.loads(
            html.unescape(self.rfile.read(content_length).decode("utf-8"))
        )

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
        
            
        large_image = "kindle" if config.get("default_image") else "kindle_" + config.get("image_theme")

        rpc_client.update(
            start=START_TIME,
            large_image=large_image,
            large_text=config["rpc"]["large_text"],
            small_image=location + "_" + config.get("image_theme"),
            small_text=config["rpc"][location]["small_text"].format(**keys),
            details=config["rpc"][location]["details"].format(**keys),
            state=config["rpc"][location]["state"].format(**keys),
            instance=config["rpc"]["instance"],
        )

    def do_DELETE(self):
        # CORS
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

        rpc_client.clear()


server = http.server.ThreadingHTTPServer(("localhost", 1231), RequestHandler)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.socket.close()
