# 📄 CV Digital Minimaliste - Ghali Lahlou

> Version minimaliste inspirée du design GitHub/LinkedIn

## 🎨 Design System

Ce CV utilise un design minimaliste et professionnel avec :
- Palette de couleurs épurée (blanc, bleu, gris)
- Typographie système (optimisée pour tous les OS)
- Layout simple et lisible
- 100% responsive

### Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Bleu principal | `#0366d6` | Liens, boutons, accents |
| Bleu hover | `#0056b3` | États hover |
| Texte principal | `#24292e` | Titres, texte important |
| Texte secondaire | `#586069` | Texte standard |
| Texte discret | `#6a737d` | Métadonnées |
| Fond clair | `#f6f8fa` | Sections alternées |
| Bordure | `#e1e4e8` | Séparateurs, cards |

### Typographie

**Police** : Système (GitHub style)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

**Tailles** :
- Titre principal (h1) : 2.5rem (40px)
- Titre de section (h2) : 2rem (32px)
- Sous-titre (h3) : 1.25rem (20px)
- Texte standard : 1rem (16px)
- Petit texte : 0.875rem (14px)

## 📂 Structure du Projet

```
minimal/
├── index-minimal.html    # Page HTML principale
├── style-minimal.css     # Feuille de style
├── script-minimal.js     # JavaScript interactif
└── README_MINIMAL.md     # Ce fichier
```

## 🚀 Installation & Utilisation

### Option 1 : Utilisation Directe

1. **Téléchargez les fichiers** :
   - `index-minimal.html`
   - `style-minimal.css`
   - `script-minimal.js`

2. **Placez votre photo de profil** :
   - Créez un dossier `assets/` au même niveau
   - Nommez votre photo `profile.jpg`
   - Ou modifiez le chemin dans le HTML : `<img src="votre-photo.jpg">`

3. **Ouvrez `index-minimal.html`** dans un navigateur

### Option 2 : GitHub Pages

1. **Créez un dépôt GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CV digital minimaliste"
   git remote add origin https://github.com/votre-username/digital-cv.git
   git branch -M main
   git push -u origin main
   ```

2. **Activez GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : Branch `main`, folder `/ (root)`
   - Save

3. **Accédez à votre CV** :
   - URL : `https://votre-username.github.io/digital-cv/`

## ✏️ Personnalisation

### 1. Informations Personnelles

Éditez `index-minimal.html` :

```html
<!-- Nom -->
<h1 class="hero-name">Votre Nom</h1>

<!-- Titre -->
<p class="hero-title">Votre Titre Professionnel</p>

<!-- Email -->
<a href="mailto:votre-email@example.com">

<!-- GitHub -->
<a href="https://github.com/votre-username">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/votre-profil">
```

### 2. Couleurs

Éditez `style-minimal.css` dans la section `:root` :

```css
:root {
    --primary: #0366d6;        /* Votre couleur principale */
    --text-primary: #24292e;   /* Couleur du texte */
    /* ... autres variables */
}
```

### 3. Sections

Chaque section suit cette structure :

```html
<section id="votre-id" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Titre</h2>
            <p class="section-subtitle">Sous-titre</p>
        </div>
        <!-- Votre contenu -->
    </div>
</section>
```

## 🎯 Composants Réutilisables

### Boutons

```html
<!-- Bouton principal -->
<a href="#" class="btn btn-primary">
    <i class="fas fa-icon"></i> Texte
</a>

<!-- Bouton secondaire -->
<a href="#" class="btn btn-secondary">
    Texte
</a>
```

### Cards

```html
<div class="profile-card">
    <div class="profile-card-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Titre</h3>
    <p>Description</p>
</div>
```

### Timeline (Expérience)

```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-header">
            <h3 class="timeline-title">Poste</h3>
            <p class="timeline-company">Entreprise</p>
            <span class="timeline-date">Dates</span>
        </div>
        <ul class="timeline-list">
            <li>Réalisation 1</li>
            <li>Réalisation 2</li>
        </ul>
        <div class="timeline-tags">
            <span class="timeline-tag">Tech 1</span>
        </div>
    </div>
</div>
```

### Cards Projet

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Nom du Projet</h3>
    <p>Description</p>
    <div class="project-tech">
        <span>Tech 1</span>
        <span>Tech 2</span>
    </div>
    <a href="#" class="project-link">
        Voir le projet
    </a>
</div>
```

## 📱 Responsive Design

Le CV est entièrement responsive avec 3 breakpoints :

| Device | Largeur | Adaptations |
|--------|---------|-------------|
| Mobile | < 640px | Menu hamburger, colonnes simples, tailles réduites |
| Tablet | 640px - 1024px | 2 colonnes pour grids, espacement optimisé |
| Desktop | > 1024px | Layout complet, toutes les fonctionnalités |

### Tester le Responsive

1. **Chrome DevTools** : F12 → Toggle device toolbar
2. **Firefox** : F12 → Responsive Design Mode
3. **Safari** : Develop → Enter Responsive Design Mode

## 🔧 Fonctionnalités

### JavaScript

- ✅ Menu mobile hamburger
- ✅ Smooth scroll vers sections
- ✅ Bouton retour en haut
- ✅ Animations au scroll
- ✅ Navigation active
- ✅ Barres de progression animées

### CSS

- ✅ Variables CSS (facile à personnaliser)
- ✅ Flexbox & Grid
- ✅ Transitions fluides
- ✅ Hover states
- ✅ Print styles optimisés

## 🎓 Bonnes Pratiques

### HTML

- ✅ Sémantique HTML5
- ✅ Structure claire
- ✅ Alt text sur images
- ✅ ARIA labels
- ✅ Meta tags SEO

### CSS

- ✅ Mobile First
- ✅ Variables CSS
- ✅ BEM-like naming
- ✅ Commentaires clairs
- ✅ Code organisé

### JavaScript

- ✅ Vanilla JS (pas de dépendances)
- ✅ Event listeners optimisés
- ✅ Intersection Observer
- ✅ Performance

## 🔍 SEO

Le CV est optimisé pour le référencement :

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

## 🖨️ Version Imprimable

Le CV a des styles d'impression optimisés :
- Navigation et footer cachés
- Couleurs adaptées
- Page breaks intelligents

Pour imprimer : `Ctrl+P` ou `Cmd+P`

## ⚡ Performance

### Optimisations

- ✅ CSS minifié (production)
- ✅ Pas de dépendances lourdes
- ✅ Images optimisées
- ✅ Lazy loading
- ✅ Chargement rapide

### Lighthouse Score Attendu

- Performance : 95+
- Accessibility : 95+
- Best Practices : 95+
- SEO : 95+

## 🔄 Mises à Jour

### Ajouter une Expérience

1. Ouvrez `index-minimal.html`
2. Trouvez la section `<div class="timeline">`
3. Copiez un `<div class="timeline-item">` existant
4. Modifiez le contenu
5. Sauvegardez

### Ajouter un Projet

1. Trouvez la section `<div class="projects-grid">`
2. Copiez un `<div class="project-card">` existant
3. Modifiez le contenu
4. Sauvegardez

## 🌐 Navigateurs Supportés

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile browsers

## 📊 Comparaison des Versions

| Fonctionnalité | Version Moderne | Version Minimale |
|----------------|-----------------|------------------|
| Fond animé | ✅ | ❌ |
| Gradients | ✅ | ❌ |
| Animations complexes | ✅ | ❌ |
| Design simple | ❌ | ✅ |
| Chargement rapide | ⚡ | ⚡⚡⚡ |
| Compatible ATS | ⚠️ | ✅ |
| Impression | ⚠️ | ✅ |

## 🆘 Dépannage

### Le menu mobile ne s'ouvre pas

Vérifiez que `script-minimal.js` est bien chargé :
```html
<script src="script-minimal.js"></script>
```

### Les icônes ne s'affichent pas

Vérifiez le lien Font Awesome :
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### La photo ne s'affiche pas

Vérifiez le chemin de l'image :
```html
<img src="../assets/profile.jpg" alt="Votre nom">
```

## 📞 Support

Pour toute question :
- 📧 Email : ghallahlou26@gmail.com
- 🐙 GitHub : [github.com/ghalilahlou](https://github.com/ghalilahlou)
- 💼 LinkedIn : [linkedin.com/in/ghali-lahlou-264151266](https://linkedin.com/in/ghali-lahlou-264151266)

## 📄 Licence

Ce template est libre d'utilisation pour votre CV personnel.

---

**Dernière mise à jour** : Novembre 2025  
**Version** : 1.0 Minimaliste  
**Auteur** : Ghali Lahlou

