#API WRAPPER
import requests
import os

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

HEADERS ={
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
}

def get_recent_commits(repo, owner):
    url = f"https://api.github.com/repos/{owner}/{repo}/commits"

    r = requests.get(url)

    commits = []

    for c in r.json():
        commits.append({
            "repo": repo,
            "sha": c["sha"],
            "author": c["commit"]["author"]["name"],
            "date": c["commit"]["author"]["date"],
            "message": c["commit"]["message"],
            "url": c["html_url"]
        })

    return commits