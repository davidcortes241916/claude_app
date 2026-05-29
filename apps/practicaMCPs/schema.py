TOOLS = [
    {
        "name": "send_email",
        "description": "Envia un correo electronico",
        "input_schema": {
            "type": "object",
            "properties": {
                "from": {
                    "type": "string"
                },
                "to": {
                    "type": "string"
                },
                "subject": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "from",
                "to",
                "subject",
                "message"
            ]
        }
    }
]