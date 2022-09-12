import json
import html
import time
import http.server
from pypresence import Presence

CONFIG_PATH = "kindle_rpc_config.json"
DEFAULT_CONFIG  = {
        "client_id": "1017128628066209813",
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

def validate_config(config, default_config):
    result = {}
    for key, item in default_config.items():
        if isinstance(item, dict):
            if config.get(key):
                result[key] = validate_config(config[key], item)
            else:
                result[key] = item
        elif key in config:
            result[key] = config[key]
        else:
            result[key] = item
            
    return result


def get_config():
    try: 
        with open(CONFIG_PATH, "r") as file:
            config = json.load(file)
            config = validate_config(config, DEFAULT_CONFIG)
    except FileNotFoundError:
        config = DEFAULT_CONFIG
    return config

config = get_config()

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


server = http.server.ThreadingHTTPServer(("localhost", 1232), RequestHandler)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.socket.close()
