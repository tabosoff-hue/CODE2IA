import zipfile
from pathlib import Path

from project.detector import detect_project
from ai.ollama import ask_ollama

print("========================================")
print("          CODE2APP AI")
print("========================================")
print()
print("Bienvenue dans Code2App AI !")
print()

zip_path = input("Entre le chemin de ton fichier ZIP : ").strip().strip('"')
zip_file = Path(zip_path)

if not zip_file.exists():
    print()
    print("❌ Fichier introuvable.")

elif zip_file.suffix.lower() != ".zip":
    print()
    print("❌ Ce fichier n'est pas un ZIP.")

else:
    output_folder = Path("output") / zip_file.stem
    output_folder.mkdir(parents=True, exist_ok=True)

    print()
    print("📦 Extraction du projet...")

    try:
        with zipfile.ZipFile(zip_file, "r") as zip_ref:
            zip_ref.extractall(output_folder)

        print("✅ Projet extrait !")
        print(f"📁 Dossier : {output_folder.resolve()}")

        print()
        print("🔍 Analyse du projet...")

        project_type = detect_project(output_folder)
        print(f"🧠 Type détecté : {project_type}")

        print()
        print("🤖 Demande d'analyse à Qwen...")

        files = []

        for file in output_folder.rglob("*"):
            if file.is_file():
                files.append(str(file.relative_to(output_folder)))

        file_list = "\n".join(files[:50])

        prompt = f"""
Analyse ce projet en français.
Type : {project_type}
Fichiers :
{file_list}

Donne seulement :
- Langage
- Fichiers importants
- Commande pour créer un .exe

Maximum 80 mots.
"""

        try:
            answer = ask_ollama(prompt)

            print()
            print("🤖 ANALYSE DE QWEN")
            print("----------------------------------------")
            print(answer)
            print("----------------------------------------")

        except Exception as error:
            print()
            print("❌ Impossible de contacter Ollama.")
            print(f"Détail : {error}")

    except zipfile.BadZipFile:
        print("❌ Le fichier ZIP est invalide.")

print()
input("Appuie sur Entrée pour quitter...")
