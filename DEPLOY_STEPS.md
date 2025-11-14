# 🚀 Guide de Déploiement - Étapes Détaillées

## ✅ Étape 1 : Git Initialisé ✓
Votre dépôt Git local est prêt avec tous les fichiers.

## 📝 Étape 2 : Créer le Dépôt sur GitHub

### Option A : Via l'interface GitHub (RECOMMANDÉ)

1. **Allez sur GitHub.com** et connectez-vous
2. **Cliquez sur le "+" en haut à droite** → "New repository"
3. **Remplissez les informations :**
   - Repository name: `digital-cv`
   - Description: "CV Digital - Ghali Lahlou"
   - Visibilité: **Public** (obligatoire pour GitHub Pages gratuit)
   - ⚠️ **NE COCHEZ PAS** "Add a README file"
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore"
   - ⚠️ **NE COCHEZ PAS** "Choose a license"
4. **Cliquez sur "Create repository"**

### Option B : Via GitHub CLI (si installé)

```bash
gh repo create digital-cv --public --source=. --remote=origin --push
```

## 🔗 Étape 3 : Connecter le Dépôt Local à GitHub

Une fois le dépôt créé sur GitHub, vous verrez une page avec des instructions.

**Copiez l'URL de votre dépôt** (elle ressemble à) :
```
https://github.com/ghalilahlou/digital-cv.git
```

**Puis exécutez ces commandes dans le terminal :**

```bash
cd C:\Users\ghali\Downloads\ltcv\digital-cv
git branch -M main
git remote add origin https://github.com/ghalilahlou/digital-cv.git
git push -u origin main
```

## 🌐 Étape 4 : Activer GitHub Pages

1. **Allez sur votre dépôt GitHub** : https://github.com/ghalilahlou/digital-cv
2. **Cliquez sur "Settings"** (en haut du dépôt)
3. **Dans le menu de gauche, cliquez sur "Pages"**
4. **Sous "Source" :**
   - Branch : sélectionnez `main`
   - Folder : sélectionnez `/ (root)`
5. **Cliquez sur "Save"**

## ⏳ Étape 5 : Attendre le Déploiement

- GitHub Pages met généralement **1-3 minutes** à déployer
- Vous verrez un message vert avec l'URL une fois prêt
- L'URL sera : **https://ghalilahlou.github.io/digital-cv/**

## ✅ Étape 6 : Vérifier

1. Ouvrez l'URL : https://ghalilahlou.github.io/digital-cv/
2. Vérifiez que le CV s'affiche correctement
3. Testez sur mobile (responsive)
4. Vérifiez tous les liens

## 🔄 Pour Mettre à Jour Plus Tard

```bash
cd C:\Users\ghali\Downloads\ltcv\digital-cv
git add .
git commit -m "Description des changements"
git push origin main
```

Les changements apparaîtront automatiquement en 1-2 minutes.

## 🆘 En Cas de Problème

### Erreur "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/ghalilahlou/digital-cv.git
```

### Erreur d'authentification
GitHub nécessite maintenant un token d'accès personnel :
1. Allez sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Créez un nouveau token avec les permissions `repo`
3. Utilisez le token comme mot de passe lors du `git push`

