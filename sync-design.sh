#!/bin/bash
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

# Sélecteur de fichier ZIP
ZIP=$(osascript -e 'tell application "Finder" to set f to choose file with prompt "Sélectionne le ZIP exporté depuis Claude Design" of type {"zip"}
POSIX path of f')

if [ -z "$ZIP" ]; then
  echo "Annulé."
  exit 0
fi

TEMP_DIR=$(mktemp -d)
echo "Extraction du ZIP..."
unzip -q "$ZIP" -d "$TEMP_DIR"

# Copie en écrasant les fichiers existants
echo "Copie des fichiers..."
cp -R "$TEMP_DIR"/* "$REPO_DIR"/

# Nettoyage
rm -rf "$TEMP_DIR"

# Git push
cd "$REPO_DIR"
DATE=$(date "+%Y-%m-%d %H:%M")
git add .
git commit -m "chore: sync Claude Design - $DATE"
git push

echo "✅ Repo mis à jour avec succès !"
