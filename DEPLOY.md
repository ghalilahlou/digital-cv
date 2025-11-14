# Guide de Déploiement Rapide

## 🚀 Déploiement en 5 minutes

### Option 1 : Via l'interface GitHub (Recommandé pour débutants)

1. **Créer le dépôt**
   - Allez sur https://github.com/new
   - Nom du dépôt : `digital-cv`
   - Cochez "Public"
   - Ne cochez PAS "Initialize with README"
   - Cliquez sur "Create repository"

2. **Uploader les fichiers**
   - Cliquez sur "uploading an existing file"
   - Glissez-déposez tous les fichiers du dossier `digital-cv/`
   - Cliquez sur "Commit changes"

3. **Activer GitHub Pages**
   - Allez dans Settings → Pages
   - Source : Branch `main`, folder `/ (root)`
   - Cliquez Save
   - Attendez 2-3 minutes

4. **Votre CV est en ligne !**
   - URL : https://ghalilahlou.github.io/digital-cv/

### Option 2 : Via Git en ligne de commande

```bash
# 1. Naviguer dans le dossier
cd digital-cv

# 2. Initialiser Git
git init

# 3. Ajouter tous les fichiers
git add .

# 4. Premier commit
git commit -m "Initial commit: CV digital"

# 5. Ajouter le remote (remplacez par votre URL)
git remote add origin https://github.com/ghalilahlou/digital-cv.git

# 6. Pousser vers GitHub
git branch -M main
git push -u origin main
```

Puis suivez l'étape 3 de l'Option 1 pour activer GitHub Pages.

## ✅ Vérification

1. Ouvrez https://ghalilahlou.github.io/digital-cv/
2. Testez sur mobile (responsive)
3. Vérifiez tous les liens
4. Testez le téléchargement du PDF

## 🔄 Mises à jour futures

```bash
git add .
git commit -m "Description des changements"
git push origin main
```

Les changements apparaîtront automatiquement sur le site en 1-2 minutes.

