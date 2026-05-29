from .email import send_email_tool

def run_tool(name, arguments):
    if name == "send_email":
        return send_email(**arguments)

    raise ValueError(f"Tool {name} not found")