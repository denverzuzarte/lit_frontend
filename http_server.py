#!/home/denver/venvs/webdev_env/bin/python3

from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

FRONTEND = Path(__file__).resolve().parent
PATH_404 = FRONTEND / "404.html"


class LitHTTPHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(FRONTEND), **kwargs)

    def send_error(self, code, message=None, explain=None):
        if code == 404 and PATH_404.is_file():
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            content = PATH_404.read_bytes()
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            return

        super().send_error(code, message, explain)


def run():
    server_class = HTTPServer
    handler = LitHTTPHandler
    server_address = ('127.0.0.1', 11111)
    httpd = server_class(server_address, handler) # http deamon
    httpd.serve_forever()
    

if __name__ == "__main__":
    run()
