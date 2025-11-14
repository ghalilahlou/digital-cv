# Intégration du QR Code dans le CV LaTeX

## 📱 Mise à jour du QR Code

Une fois votre CV digital déployé sur GitHub Pages, mettez à jour le QR code dans vos fichiers LaTeX.

## 🔧 Modification des fichiers LaTeX

### Fichier : `cv_ghali_lahlou_vscode_fr.tex`

**Ligne à modifier (environ ligne 40) :**

```latex
% AVANT
\qrcode[height=1cm]{https://ghalilahlou.github.io/jsogno/cv.png}

% APRÈS
\qrcode[height=1cm]{https://ghalilahlou.github.io/digital-cv/}
```

### Fichier : `cv_ghali_lahlou_vscode_en.tex`

**Même modification :**

```latex
% AVANT
\qrcode[height=1cm]{https://ghalilahlou.github.io/jsogno/cv.png}

% APRÈS
\qrcode[height=1cm]{https://ghalilahlou.github.io/digital-cv/}
```

## 📝 Code complet du QR Code

```latex
\begin{minipage}[t]{0.1\textwidth}
\vspace{-8pt}
\qrcode[height=1cm]{https://ghalilahlou.github.io/digital-cv/}
\end{minipage}
```

## ✅ Vérification

1. Compilez votre CV LaTeX
2. Scannez le QR code avec votre téléphone
3. Vérifiez que le lien ouvre bien votre CV digital

## 🎯 Avantages

- ✅ Accès instantané au CV digital depuis le PDF
- ✅ Partage facile via QR code
- ✅ CV toujours à jour (mise à jour en ligne)
- ✅ Version interactive avec liens cliquables

