import urllib.request
import json


def ask_ollama(prompt):
    data = json.dumps({
        "model": "qwen3.5:0.8b",
        "prompt": prompt,
        "stream": False,
        "think": False,
        "options": {
            "num_predict": 120,
            "temperature": 0.2
        }
    }).encode("utf-8")

    request = urllib.request.Request(
        "http://127.0.0.1:11434/api/generate",
        data=data,
        headers={"Content-Type": "application/json"}
    )

    with urllib.request.urlopen(request, timeout=300) as response:
        result = json.loads(response.read().decode("utf-8"))

    return result["response"]