# Instructions de déploiement pour TimeTravel Agency

## Prérequis
- Compte Vercel (gratuit)
- Node.js installé
- Interface en ligne de commande Vercel installée
- Clé API Mistral (gratuit pour commencer)

## Étapes de déploiement

### 1. Obtenir une clé API Mistral
- Inscrivez-vous sur [Mistral AI](https://mistral.ai/)
- Obtenez votre clé API dans le tableau de bord
- La clé est gratuite pour commencer

### 2. Configurer la clé API
Créez un fichier `.env.local` à la racine du projet et ajoutez votre clé :
```bash
NEXT_PUBLIC_MISTRAL_API_KEY=votre_cle_api_ici
```

### 3. Installer l'interface en ligne de commande Vercel
```bash
npm install -g vercel
```

### 4. Se connecter à Vercel
```bash
vercel login
```
Suivez les instructions pour vous connecter à votre compte Vercel.

### 5. Déployer l'application
```bash
cd /home/loocist/WebstormProjects/untitled1
vercel --prod
```

### 4. Configuration du déploiement
- Choisissez de connecter à un projet existant ou créez-en un nouveau
- Sélectionnez le répertoire racine du projet
- Confirmez les paramètres par défaut pour la construction

### 5. Accéder à votre application déployée
Une fois le déploiement terminé, Vercel vous fournira une URL comme :
```
https://timetravel-agency.vercel.app
```

## Fonctionnalités déployées
- Page d'accueil avec hero section
- Galerie des 3 destinations temporelles (Paris 1889, Crétacé, Florence 1504)
- **Chatbot IA avancé avec Mistral AI** (réponses intelligentes et contextuelles)
- Section "À propos" avec informations sur l'agence
- Footer avec liens et informations de contact
- Design élégant avec animations Framer Motion
- Responsive pour mobile et desktop
- Indicateurs de chargement pour une meilleure UX

## Technologies utilisées
- Next.js 16 avec App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion pour les animations
- Lucide React pour les icônes
- Biome pour le linting et le formatage
- **Mistral AI API** pour le chatbot intelligent

## Structure du projet
```
src/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   ├── Header.tsx      # Header avec navigation
│   ├── HeroSection.tsx # Section hero avec CTA
│   ├── DestinationsSection.tsx # Galerie des destinations
│   ├── AboutSection.tsx # Section à propos
│   ├── Footer.tsx      # Footer
│   ├── Chatbot.tsx     # Chatbot IA
│   └── ui/             # Composants UI
└── lib/
    └── utils.ts        # Fonctions utilitaires
```

## Personnalisation
Vous pouvez personnaliser :
- Les destinations dans `src/components/DestinationsSection.tsx`
- Les réponses du chatbot dans `src/components/Chatbot.tsx`
- Les couleurs dans `src/app/globals.css`
- Le contenu des sections dans les composants respectifs

## Exemples de questions pour le chatbot

Le chatbot Mistral AI peut répondre à une grande variété de questions. Voici quelques exemples :

**Sur les destinations :**
- "Qu'est-ce qui rend Paris 1889 si spécial ?"
- "Quels dinosaures puis-je voir pendant le voyage au Crétacé ?"
- "Parlez-moi des artistes que je pourrais rencontrer à Florence 1504"

**Sur les détails pratiques :**
- "Combien de temps dure le voyage au Crétacé ?"
- "Quel est le meilleur moment pour visiter Florence 1504 ?"
- "Quels vêtements devrais-je emporter pour Paris 1889 ?"

**Sur la technologie :**
- "Comment fonctionne le voyage temporel ?"
- "Quelles mesures de sécurité sont en place ?"
- "Puis-je apporter des objets modernes avec moi ?"

**Questions ouvertes :**
- "Quelle destination me recommandez-vous pour une expérience culturelle ?"
- "Quelle est la destination la plus populaire et pourquoi ?"
- "Pouvez-vous me raconter une anecdote historique sur Paris 1889 ?"

## Configuration avancée

Pour personnaliser davantage le chatbot, vous pouvez modifier le prompt système dans le fichier `src/components/Chatbot.tsx` :

```typescript
// Dans la fonction getMistralResponse
messages: [
  {
    role: "system",
    content: "Tu es l'assistant virtuel..." // Modifiez ce texte
  },
  {
    role: "user",
    content: userInput,
  },
]
```

## Support
Pour toute question ou problème, consultez la documentation Next.js ou contactez le support Vercel.

**Pour le chatbot Mistral AI :**
- Documentation : [https://docs.mistral.ai/](https://docs.mistral.ai/)
- Support : [https://mistral.ai/support](https://mistral.ai/support)