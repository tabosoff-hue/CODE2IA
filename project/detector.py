from pathlib import Path


def detect_project(folder):
    folder = Path(folder)

    if list(folder.rglob("*.py")):
        return "Python"

    if (folder / "package.json").exists():
        return "Node.js / JavaScript"

    if list(folder.rglob("*.csproj")):
        return "C# / .NET"

    if (folder / "CMakeLists.txt").exists():
        return "C/C++"

    return "Projet inconnu"