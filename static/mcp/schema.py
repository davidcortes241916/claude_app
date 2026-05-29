
TOOLS = [
    {
        "name": "get_recent_commits",
        "description": "Obtiene los ultimos N commits de un repositorio",
        "input_schema": {
            "type": "object",
            "properties": {
                "owner": {
                    "type": "string"
                },
                "repo": {
                    "type": "string"
                }
            },
            "required": [
                "owner",
                "repo"
            ]
        }
    }
]