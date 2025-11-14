# CV Digital - Ghali Lahlou

CV digital moderne, responsive et professionnel hébergé sur GitHub Pages.

## 🌐 Accès

**URL du CV Digital :** https://ghalilahlou.github.io/digital-cv/

## 📋 Structure du Projet

```
digital-cv/
├── index.html          # Page principale du CV
├── style.css           # Styles CSS (design moderne et responsive)
├── script.js           # JavaScript pour interactions
├── README.md           # Ce fichier
└── assets/             # Dossier pour images (optionnel)
```

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer le dépôt GitHub

1. Créez un nouveau dépôt sur GitHub nommé `digital-cv`
2. Ne cochez **pas** "Initialize this repository with a README"

### Étape 2 : Initialiser et pousser le code

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: CV digital complet"

# Ajouter le remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/ghalilahlou/digital-cv.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub : `https://github.com/ghalilahlou/digital-cv`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Cliquez sur **Save**

### Étape 4 : Accéder à votre CV

Après quelques minutes, votre CV sera accessible à :
**https://ghalilahlou.github.io/digital-cv/**

## 📱 Intégration QR Code dans le CV LaTeX

Pour ajouter un QR code dans votre CV PDF LaTeX qui pointe vers ce CV digital :

### 1. Ajouter le package qrcode

Dans votre fichier `.tex`, ajoutez dans le préambule :

```latex
\usepackage{qrcode}
```

### 2. Insérer le QR code

Placez le QR code dans le header de votre CV :

```latex
\begin{minipage}[t]{0.88\textwidth}
% Votre header ici
\end{minipage}
\hfill
\begin{minipage}[t]{0.1\textwidth}
\vspace{-8pt}
\qrcode[height=1cm]{https://ghalilahlou.github.io/digital-cv/}
\end{minipage}
```

### 3. Exemple complet

```latex
\documentclass[a4paper,9pt]{article}
\usepackage{qrcode}
% ... autres packages ...

\begin{document}

\begin{minipage}[t]{0.88\textwidth}
\begin{center}
  {\Large\bfseries Ghali Lahlou}\\[4pt]
  % Vos coordonnées ici
\end{center}
\end{minipage}
\hfill
\begin{minipage}[t]{0.1\textwidth}
\vspace{-8pt}
\qrcode[height=1cm]{https://ghalilahlou.github.io/digital-cv/}
\end{minipage}

% Reste du CV...

\end{document}
```

## 🎨 Caractéristiques du CV Digital

- ✅ **Design moderne** : Interface claire et professionnelle
- ✅ **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- ✅ **Navigation fluide** : Menu sticky avec ancres de navigation
- ✅ **Optimisé SEO** : Meta tags et structure sémantique
- ✅ **Performance** : CSS optimisé, chargement rapide
- ✅ **Accessible** : Structure HTML sémantique
- ✅ **Print-friendly** : Styles d'impression optimisés

## 📝 Sections Incluses

1. **Header** : Nom, titre professionnel, coordonnées
2. **Profil Professionnel** : Résumé concis
3. **Compétences Techniques** : Organisées par catégories
4. **Expérience Professionnelle** : Détails des postes
5. **Projets Techniques** : Portfolio de projets
6. **Formation** : Parcours académique
7. **Langues & Centres d'Intérêt**

## 🔧 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `style.css` :

```css
:root {
    --primary-color: #1e3a5f;      /* Couleur principale */
    --secondary-color: #2c5f8d;   /* Couleur secondaire */
    --accent-color: #1e88e5;      /* Couleur d'accent */
}
```

### Ajouter des sections

1. Ajoutez la section HTML dans `index.html`
2. Ajoutez le lien dans la navigation
3. Personnalisez les styles dans `style.css`

## 📱 Responsive Breakpoints

- **Desktop** : > 768px
- **Tablet** : 481px - 768px
- **Mobile** : ≤ 480px

## 🔄 Mise à jour du CV

Pour mettre à jour le CV :

```bash
# Modifier les fichiers
# Puis :
git add .
git commit -m "Mise à jour du CV"
git push origin main
```

Les changements seront automatiquement déployés sur GitHub Pages.

## 📄 Téléchargement du CV PDF

Un lien "Télécharger CV PDF" est disponible dans la navigation. Assurez-vous d'avoir un fichier `cv_ghali_lahlou_vscode_fr.pdf` dans le dossier racine, ou modifiez le lien dans `index.html`.

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec Flexbox et Grid
- **JavaScript** : Interactions et animations
- **Font Awesome** : Icônes (via CDN)
- **GitHub Pages** : Hébergement gratuit

## 📞 Contact

- **Email** : ghallahlou26@gmail.com
- **GitHub** : [github.com/ghalilahlou](https://github.com/ghalilahlou)
- **LinkedIn** : [linkedin.com/in/ghali-lahlou-264151266](https://linkedin.com/in/ghali-lahlou-264151266)

---

**Dernière mise à jour** : 2025

