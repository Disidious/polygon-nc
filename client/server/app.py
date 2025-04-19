# FOR WINDOWS ===============================================
import mimetypes

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
# ===========================================================

import os
import requests
from flask import Flask, send_file, request
from dotenv import load_dotenv

from metadata_handler import MetadataHandler
from logger import Logger

app = Flask(__name__, template_folder="./static")

metadata_handler = MetadataHandler()

if os.getenv("FLASK_ENV") == "production":
    load_dotenv(".env.production")
else:
    load_dotenv(".env.local")


@app.route("/")
def home():
    return metadata_handler.render_index()


@app.route("/product")
def product():
    try:
        api_url = os.getenv("VITE_API_URL", "")
        response = requests.get(
            url=api_url + "/products/" + request.args.get("productid")
        )
    except Exception as e:
        Logger.log(str(e))
        return metadata_handler.render_index()

    if not response.ok:
        Logger.log(response.content)
        return metadata_handler.render_index()

    product = response.json()
    return metadata_handler.render_index(
        metadata={
            "title": product["name"] + " - Polygon Network Company",
            "description": "Brand:\n%s\nSpecs:\n%s"
            % (product["brand"], product["specs"]),
            "image": product["image"],
        }
    )


@app.route("/<path:path>")
def catch_all(path):
    if any(path.startswith(f) for f in os.listdir("./static")):
        return send_file("./static/" + path)
    return metadata_handler.render_index(path=path)


if __name__ == "__main__":
    app.run()
