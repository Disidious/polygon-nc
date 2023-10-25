import json
from flask import render_template


class MetadataHandler:
    def __init__(self):
        self.static_metadata = json.load(open("static/static_metadata.json"))

    def _get_index(self, metadata=None):
        if metadata is None:
            title = self.static_metadata["default"]["title"]
            description = self.static_metadata["default"]["description"]
            image = self.static_metadata["default"]["image"]
        else:
            title = metadata.get("title", self.static_metadata["default"]["title"])
            description = metadata.get(
                "description", self.static_metadata["default"]["description"]
            )
            image = metadata.get("image", self.static_metadata["default"]["image"])

        return render_template(
            "index.html", title=title, description=description, image=image
        )

    def render_index(self, path=None, metadata=None):
        if metadata is not None:
            return self._get_index(metadata)
        elif path is not None:
            for path_metadata in self.static_metadata["paths"]:
                if path_metadata["path"] == path:
                    return self._get_index(path_metadata)

        return self._get_index()
