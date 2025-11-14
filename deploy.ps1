# Script de déploiement automatique pour GitHub Pages
# CV Digital - Ghali Lahlou

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Déploiement CV Digital sur GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
try {
    $gitVersion = git --version
    Write-Host "✓ Git détecté: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git n'est pas installé. Installez Git depuis https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Vérifier si on est dans le bon dossier
if (-not (Test-Path "index.html")) {
    Write-Host "✗ Erreur: index.html introuvable. Exécutez ce script depuis le dossier digital-cv" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Étape 1: Vérification du dépôt Git..." -ForegroundColor Yellow

# Initialiser Git si nécessaire
if (-not (Test-Path ".git")) {
    Write-Host "  → Initialisation du dépôt Git..." -ForegroundColor Gray
    git init
}

# Vérifier le statut
$status = git status --porcelain
if ($status) {
    Write-Host "  → Ajout des fichiers..." -ForegroundColor Gray
    git add .
    git commit -m "Update CV digital"
    Write-Host "  ✓ Fichiers ajoutés et commités" -ForegroundColor Green
} else {
    Write-Host "  ✓ Aucun changement à commiter" -ForegroundColor Green
}

Write-Host ""
Write-Host "Étape 2: Configuration du remote GitHub..." -ForegroundColor Yellow

# Demander l'URL du dépôt
$repoUrl = Read-Host "  Entrez l'URL de votre dépôt GitHub (ex: https://github.com/ghalilahlou/digital-cv.git)"

if (-not $repoUrl) {
    Write-Host "  → Création du dépôt sur GitHub requise..." -ForegroundColor Gray
    Write-Host ""
    Write-Host "  INSTRUCTIONS:" -ForegroundColor Cyan
    Write-Host "  1. Allez sur https://github.com/new" -ForegroundColor White
    Write-Host "  2. Nom du dépôt: digital-cv" -ForegroundColor White
    Write-Host "  3. Cochez 'Public'" -ForegroundColor White
    Write-Host "  4. NE cochez PAS 'Add a README'" -ForegroundColor White
    Write-Host "  5. Cliquez 'Create repository'" -ForegroundColor White
    Write-Host ""
    $repoUrl = Read-Host "  Entrez maintenant l'URL du dépôt créé"
}

# Configurer le remote
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "  → Remote 'origin' existe déjà: $remoteExists" -ForegroundColor Gray
    $update = Read-Host "  Voulez-vous le mettre à jour? (O/N)"
    if ($update -eq "O" -or $update -eq "o") {
        git remote set-url origin $repoUrl
        Write-Host "  ✓ Remote mis à jour" -ForegroundColor Green
    }
} else {
    git remote add origin $repoUrl
    Write-Host "  ✓ Remote 'origin' ajouté" -ForegroundColor Green
}

Write-Host ""
Write-Host "Étape 3: Push vers GitHub..." -ForegroundColor Yellow

# Changer la branche en main si nécessaire
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "  → Changement de branche vers 'main'..." -ForegroundColor Gray
    git branch -M main
}

# Push
Write-Host "  → Envoi vers GitHub..." -ForegroundColor Gray
try {
    git push -u origin main
    Write-Host "  ✓ Code poussé vers GitHub avec succès!" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Erreur lors du push. Vérifiez vos identifiants GitHub." -ForegroundColor Red
    Write-Host ""
    Write-Host "  Si vous avez besoin d'un token d'accès:" -ForegroundColor Yellow
    Write-Host "  1. GitHub → Settings → Developer settings → Personal access tokens" -ForegroundColor White
    Write-Host "  2. Créez un token avec permission 'repo'" -ForegroundColor White
    Write-Host "  3. Utilisez-le comme mot de passe lors du push" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✓ Déploiement réussi!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "ÉTAPES FINALES:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Allez sur votre dépôt GitHub:" -ForegroundColor White
Write-Host "   https://github.com/ghalilahlou/digital-cv" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Activez GitHub Pages:" -ForegroundColor White
Write-Host "   Settings → Pages → Source: main / (root) → Save" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Attendez 1-3 minutes, puis visitez:" -ForegroundColor White
Write-Host "   https://ghalilahlou.github.io/digital-cv/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur Entrée pour quitter..."
Read-Host

