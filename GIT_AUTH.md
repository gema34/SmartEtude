# 🔐 Guide d'Authentification GitHub

## Problème
GitHub ne supporte plus l'authentification par mot de passe. Vous devez utiliser un **Token d'Accès Personnel (PAT)** ou **SSH**.

---

## Option 1 : Token d'Accès Personnel (PAT) - Recommandé

### Étape 1 : Créer un token GitHub

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
3. Configurez le token :
   - **Note** : `SmartEtude Local`
   - **Expiration** : Choisissez une durée (90 jours recommandé)
   - **Scopes** : Cochez **`repo`** (accès complet aux dépôts)
4. Cliquez sur **"Generate token"**
5. **⚠️ IMPORTANT** : Copiez le token immédiatement (vous ne pourrez plus le voir)

### Étape 2 : Utiliser le token

Lors du prochain `git push`, utilisez :
- **Username** : `gema177` (votre nom d'utilisateur GitHub)
- **Password** : Collez le token que vous venez de créer

```bash
git push
# Username: gema177
# Password: [collez votre token ici]
```

Le token sera sauvegardé automatiquement pour les prochaines fois.

---

## Option 2 : SSH (Alternative)

### Étape 1 : Vérifier si vous avez déjà une clé SSH

```bash
ls -al ~/.ssh
```

### Étape 2 : Créer une nouvelle clé SSH (si nécessaire)

```bash
ssh-keygen -t ed25519 -C "votre_email@example.com"
# Appuyez sur Entrée pour accepter l'emplacement par défaut
# Entrez un mot de passe (optionnel mais recommandé)
```

### Étape 3 : Ajouter la clé SSH à votre agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Étape 4 : Copier la clé publique

```bash
cat ~/.ssh/id_ed25519.pub
# Copiez tout le contenu affiché
```

### Étape 5 : Ajouter la clé à GitHub

1. Allez sur : https://github.com/settings/keys
2. Cliquez sur **"New SSH key"**
3. **Title** : `SmartEtude Local`
4. **Key** : Collez la clé publique que vous avez copiée
5. Cliquez sur **"Add SSH key"**

### Étape 6 : Changer l'URL du remote vers SSH

```bash
git remote set-url origin git@github.com:Gema177/SmartEtude.git
```

### Étape 7 : Tester la connexion

```bash
ssh -T git@github.com
# Vous devriez voir : "Hi Gema177! You've successfully authenticated..."
```

### Étape 8 : Pousser les changements

```bash
git push
# Plus besoin de mot de passe !
```

---

## Option 3 : GitHub CLI (gh)

### Installation

```bash
# Ubuntu/Debian
sudo apt install gh

# Ou via snap
sudo snap install gh
```

### Authentification

```bash
gh auth login
# Suivez les instructions à l'écran
```

### Utilisation

```bash
git push
# L'authentification se fera automatiquement via gh
```

---

## 🔧 Configuration actuelle

Votre remote actuel :
```
origin  https://github.com/Gema177/SmartEtude.git
```

**Pour utiliser SSH**, changez-le avec :
```bash
git remote set-url origin git@github.com:Gema177/SmartEtude.git
```

---

## ✅ Vérification

Après configuration, testez avec :
```bash
git push
```

Si tout fonctionne, vous verrez :
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/Gema177/SmartEtude.git
   abc1234..def5678  main -> main
```

---

## 🆘 Aide supplémentaire

- **Documentation GitHub** : https://docs.github.com/en/authentication
- **Générer un token** : https://github.com/settings/tokens
- **Gérer les clés SSH** : https://github.com/settings/keys

