# Plateforme de Traduction Sécurisée Fullstack - Frontend

Application web interne permettant d'accéder au service de traduction sécurisé TalAIt :

- Connexion / inscription (auth JWT)

- Formulaire de traduction FR ↔ EN

- Appels API protégés

- Affichage du résultat en temps réel

- Déploiement Docker complet

## 🚀 Installation

**1. Prérequis**

- Node 20+

- Backend opérationnel (http://localhost:8000
)

**2. Cloner & Installer**

```bash
git clone https://github.com/SaidaAourras/plateforme-de-traduction-s-curis-e-frontend-.git
cd frontend
npm install
cp .env.example .env.local
```

## ▶️ Lancement
**Mode développement**

        npm run dev

**Production**

        npm run build
        npm start

## 🔐 Gestion du JWT

**Stockage**

``` bash
localStorage.setItem("token", <jwt>)
```

**Injection automatique**

```bash
Authorization: Bearer <token>
```

**Protection des pages**

- si JWT absent → /auth/login


## 📄 Pages
- /auth

    - Formulaire inscription

    - Formulaire connexion

    - Sauvegarde du token

    - Redirection automatique → /translate

- /translate (🔒 protégée)

    - Input texte

    - Choix direction FR→EN / EN→FR

    - Appel API POST /translate

    - Gestion états :

        - loading

        - error (503, 401…)

        - success

## 🧩 Structure

        src/
        └── app/
            ├── page.js                      # Page d'accueil
            ├── layout.js                    # Layout global
            ├── globals.css                  # Styles globaux
            ├── favicon.ico
            │
            ├── auth/                        # Pages liées à l'auth
            │   ├── login/page.js
            │   ├── register/page.js
            │   └── ... 
            │
            ├── components/                  # Composants UI
            │   ├── Navbar.jsx
            │   ├── Input.jsx
            │   └── ... 
            │
            └── translation/                 # Interface traduction
                ├── page.js
                ├── TranslationForm.jsx
                └── TranslationResult.jsx

        lib/                                 # Fonctions partagées
        ├── utils/
        │   ├── utils.js
        │   └── auth.js                      # gestion token localStorage, etc.

        components/                          # Autres composants globaux
        ├── Header.jsx
        └── Footer.jsx

        public/                              # Assets publics

        dockerfile
        eslint.config.mjs
        next.config.mjs
        package.json
        README.md


## 🧪 Tests Manuels Recommandés

1. Inscription → succès

2. Login → réception JWT

3. Traduction FR→EN → succès

4. Traduction sans token → redirect /auth

5. Token expiré → redirect /auth

6. Déconnexion → suppression JWT

## 🐳 Docker

Un Dockerfile est fourni pour un déploiement interne.

Build :

        docker build -t talait-frontend .

Run :

        docker run -p 3000:3000 talait-frontend

## ✨ Author

**SAIDA AOURRAS**  

- 🐙 GitHub: [Aourras_Saida](https://github.com/SaidaAourras)  

