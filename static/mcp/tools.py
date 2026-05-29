from .github import get_recent_commits

def run_tool(name, args):
    if name == "get_recent_commits":
        return get_recent_commits(
            repo=args["repo"],
            owner=args["owner"]
        )
    return {"error": "tool no encontrada"}