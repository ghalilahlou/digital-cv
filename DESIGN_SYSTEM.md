# 🎨 Design System - CV Digital Ghali Lahlou

## 📋 Vue d'ensemble

Design minimaliste et professionnel inspiré du style GitHub/LinkedIn, optimisé pour la lisibilité et la simplicité.

---

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
--primary-color: #0366d6;        /* Bleu principal (liens, accents) */
--primary-hover: #0056b3;        /* Bleu hover */
--primary-light: #e1f5fe;        /* Bleu clair (backgrounds) */
```

### Couleurs Texte
```css
--text-primary: #24292e;         /* Texte principal noir */
--text-secondary: #586069;       /* Texte secondaire gris */
--text-muted: #6a737d;           /* Texte discret */
--text-white: #ffffff;           /* Texte blanc */
```

### Couleurs Backgrounds
```css
--bg-white: #ffffff;             /* Fond blanc principal */
--bg-light: #f6f8fa;             /* Fond gris très clair */
--bg-secondary: #e1e4e8;         /* Fond gris clair */
--bg-dark: #24292e;              /* Fond sombre (footer) */
```

### Couleurs Utilitaires
```css
--border-color: #e1e4e8;         /* Bordures */
--shadow-color: rgba(0,0,0,0.1); /* Ombres */
--success: #28a745;              /* Vert succès */
--warning: #ffc107;              /* Orange avertissement */
--error: #dc3545;                /* Rouge erreur */
```

---

## 📐 Typographie

### Police Principale
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

### Tailles de Texte
```css
--font-xs: 0.75rem;     /* 12px */
--font-sm: 0.875rem;    /* 14px */
--font-base: 1rem;      /* 16px */
--font-lg: 1.125rem;    /* 18px */
--font-xl: 1.25rem;     /* 20px */
--font-2xl: 1.5rem;     /* 24px */
--font-3xl: 1.875rem;   /* 30px */
--font-4xl: 2.25rem;    /* 36px */
--font-5xl: 3rem;       /* 48px */
```

### Poids de Police
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Hauteur de Ligne
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

---

## 📏 Spacing

### Espacement (8px base)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

---

## 🔲 Bordures & Ombres

### Border Radius
```css
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### Box Shadow
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
```

---

## 🧩 Composants

### Boutons

#### Bouton Principal
```css
.btn-primary {
    background: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border-radius: var(--radius-md);
    border: none;
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: background 0.2s ease;
}

.btn-primary:hover {
    background: var(--primary-hover);
}
```

#### Bouton Secondaire
```css
.btn-secondary {
    background: white;
    color: var(--primary-color);
    padding: 10px 20px;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    border-color: var(--primary-color);
    background: var(--primary-light);
}
```

### Cards
```css
.card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.2s ease;
}

.card:hover {
    box-shadow: var(--shadow-md);
}
```

### Sections
```css
.section {
    padding: var(--space-12) 0;
}

.section-title {
    font-size: var(--font-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-3);
    border-bottom: 2px solid var(--border-color);
}
```

### Links
```css
.link {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s ease;
}

.link:hover {
    color: var(--primary-hover);
    text-decoration: underline;
}
```

---

## 📱 Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Tablette portrait */
--breakpoint-md: 768px;   /* Tablette landscape */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Usage
```css
/* Mobile par défaut */
.container {
    width: 100%;
    padding: 0 1rem;
}

/* Tablette et plus */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}
```

---

## 🎯 Principes de Design

### 1. Minimalisme
- Espaces blancs généreux
- Pas d'éléments superflus
- Clarté et lisibilité avant tout

### 2. Hiérarchie Visuelle
- Utiliser la taille et le poids de police
- Espacement cohérent
- Contraste approprié

### 3. Accessibilité
- Contraste minimum WCAG AA
- Tailles de texte lisibles
- Navigation au clavier
- Focus states visibles

### 4. Performance
- CSS optimisé
- Images optimisées
- Chargement rapide

---

## 📦 Classes Utilitaires

### Espacement
```css
.m-0 { margin: 0; }
.m-1 { margin: var(--space-1); }
.mt-4 { margin-top: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.p-4 { padding: var(--space-4); }
```

### Texte
```css
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.font-bold { font-weight: var(--font-bold); }
.text-muted { color: var(--text-muted); }
```

### Flexbox
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
```

---

## 🔄 Transitions

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

Usage recommandé :
- Hover states: `transition-fast`
- Animations UI: `transition-base`
- Modals/Overlays: `transition-slow`

---

## ✅ Checklist d'Implémentation

- [ ] Importer les variables CSS
- [ ] Définir la police système
- [ ] Implémenter les composants de base
- [ ] Tester la responsive
- [ ] Vérifier l'accessibilité
- [ ] Optimiser les performances
- [ ] Valider le contraste des couleurs
- [ ] Tester sur différents navigateurs

