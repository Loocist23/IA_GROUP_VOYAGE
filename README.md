# TimeTravel Agency — Webapp Interactive

Projet supervisé IA (M1/M2) — Session 2 : **WEBAPP & IA AGENTS**

## 👥 Équipe
- JADE COTTIN
- ZEGNAL ANTHONY
- ALEXANDRE SAUZE
- DUPILLE FLORIAN

## 🔗 Livrables (à renseigner)
- URL de la webapp déployée : _à compléter_
- Repository (GitHub ou export code) : _à compléter_

## 🎯 Objectif
Créer une webapp moderne et interactive pour **TimeTravel Agency** permettant de :
- Découvrir 3 destinations temporelles (Paris 1889, Crétacé, Florence 1504)
- Interagir avec un **agent conversationnel** (chatbot) qui conseille les visiteurs

## ✨ Fonctionnalités
- Landing page : header, hero (CTA), sections “Destinations”, “À propos”, footer
- Galerie des destinations : 3 cards (durée + prix + CTA “Réserver maintenant”)
- Animations UI : transitions / entrées au scroll (Framer Motion)
- Chatbot IA : widget en bas à droite avec réponses via **Mistral AI** (et fallback si l’API n’est pas configurée)
- Easter eggs :
  - `/easteregg1` affiche les 2 images du dossier `public/`
  - `/easteregg2` affiche les 2 images du dossier `public/`

## 🧰 Stack technique
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icônes)
- Biome (lint/format)

## 🤖 IA utilisées (transparence)
- Chatbot : **Mistral AI API** (`mistral-small`) via `src/components/Chatbot.tsx`
- Génération/itération du code (vibe coding) : _à compléter (outil + modèle utilisés)_
- Visuels Session 1 : _à compléter (outil(s) de génération + crédits/licences)_

## 🚀 Installation & lancement
Prérequis : Node.js (et npm)

1) Installer les dépendances :
```bash
npm install
```

2) (Optionnel) Configurer Mistral pour le chatbot :
Créer `.env.local` à la racine :
```bash
NEXT_PUBLIC_MISTRAL_API_KEY=...
```

3) Lancer en dev :
```bash
npm run dev
```
Puis ouvrir `http://localhost:3000`.

## 🏗️ Build & production
```bash
npm run build
npm run start
```

## 📦 Déploiement
Voir `DEPLOYMENT_INSTRUCTIONS.md`.

## 🗂️ Structure (résumé)
```
src/
  app/                 # routes Next.js (App Router)
  components/          # sections UI + chatbot
  lib/                 # utilitaires
public/                # assets statiques (images)
```

## 🧾 Prompts / Process (à compléter)
Pour le rendu “open source”, ajouter ici :
- Les prompts utilisés (maquette, UI, chatbot, itérations)
- Les choix effectués (MVP, arbitrages, limites)
- Les crédits (APIs, modèles, assets)

## 📝 Notes
- Sans clé Mistral (`NEXT_PUBLIC_MISTRAL_API_KEY`), le chatbot utilise des réponses de secours (fallback).
- Les images des destinations utilisent actuellement des liens Unsplash (placeholders) : remplaçables par les visuels Session 1.

## 📜 Licence
Projet pédagogique — M1/M2 Digital & IA.
