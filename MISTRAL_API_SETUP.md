# Configuration de l'API Mistral pour le Chatbot

## 🔑 Obtention de la clé API

### 1. Créer un compte Mistral
- Rendez-vous sur [https://mistral.ai/](https://mistral.ai/)
- Cliquez sur "Sign Up" et créez un compte
- Vérifiez votre adresse email

### 2. Obtenir votre clé API
- Connectez-vous à votre compte
- Allez dans le tableau de bord (Dashboard)
- Naviguez vers "API Keys" ou "Paramètres du compte"
- Générez une nouvelle clé API
- **Copiez la clé immédiatement** (elle ne sera plus visible après)

### 3. Configurer la clé dans le projet

#### Option A: Développement local
1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé :
```bash
NEXT_PUBLIC_MISTRAL_API_KEY=votre_cle_api_mistral_ici
```

#### Option B: Déploiement sur Vercel
1. Allez dans votre projet Vercel
2. Allez dans "Settings" > "Environment Variables"
3. Ajoutez une nouvelle variable :
   - **Name**: `NEXT_PUBLIC_MISTRAL_API_KEY`
   - **Value**: Votre clé API Mistral
   - **Target**: Production (et Development si besoin)
4. Cliquez sur "Save"

## 🤖 Configuration du Chatbot

Le chatbot est configuré pour utiliser le modèle `mistral-small` qui est idéal pour :
- **Vitesse**: Réponses rapides
- **Coût**: Économique pour les applications de production
- **Qualité**: Excellente compréhension du contexte

### Paramètres du chatbot

Vous pouvez personnaliser le comportement dans `src/components/Chatbot.tsx` :

```typescript
// Paramètres de l'API
const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_MISTRAL_API_KEY}`,
  },
  body: JSON.stringify({
    model: "mistral-small",  // Modèle utilisé
    messages: [
      {
        role: "system",
        content: "Tu es l'assistant virtuel de TimeTravel Agency...",  // Personnalité du bot
      },
      {
        role: "user",
        content: userInput,
      },
    ],
    temperature: 0.7,  // Créativité (0.0-1.0)
    max_tokens: 500,   // Longueur maximale de la réponse
  }),
});
```

### Personnalisation de la personnalité

Modifiez le prompt système pour changer le comportement du chatbot :

```typescript
content: `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle est de conseiller les clients sur les meilleures destinations temporelles 
(Paris 1889, Crétacé, Florence 1504) avec enthousiasme et expertise.
Réponds en français, soyez professionnel mais chaleureux, passionné d'histoire 
et expert en voyage temporel. 

Règles supplémentaires:
- Toujours mentionner les mesures de sécurité
- Proposer des destinations alternatives si approprié
- Donner des détails historiques précis
- Être enthousiaste mais réaliste`
```

## 💡 Bonnes pratiques

### Gestion des erreurs
Le chatbot inclut déjà une gestion des erreurs robuste :
- Détection des erreurs de réseau
- Gestion des erreurs d'API
- Messages d'erreur conviviaux
- État de chargement visible

### Optimisation des coûts
Pour réduire les coûts d'API :
- Limitez `max_tokens` à 500 (valeur actuelle)
- Utilisez `temperature: 0.7` pour un bon équilibre créativité/précision
- Cachez les réponses fréquentes côté client si nécessaire

### Sécurité
- La clé API est préfixée par `NEXT_PUBLIC_` car elle est utilisée côté client
- Pour plus de sécurité, vous pourriez créer une API proxy côté serveur
- Ne partagez jamais votre clé API publiquement

## 🚀 Test du chatbot

Une fois configuré, testez le chatbot avec ces questions :

1. **Question simple**: "Qu'est-ce que Paris 1889 ?"
2. **Question complexe**: "Comparez les trois destinations pour un voyage culturel"
3. **Question pratique**: "Que dois-je emporter pour le Crétacé ?"
4. **Question créative**: "Racontez-moi une journée typique à Florence 1504"

## 📊 Surveillance et amélioration

Pour améliorer continuellement le chatbot :

1. **Surveillez les conversations** (via les logs ou un système de feedback)
2. **Identifiez les questions fréquentes** et améliorez le prompt système
3. **Ajoutez des exemples** dans le prompt pour guider les réponses
4. **Testez régulièrement** avec de nouveaux scénarios

## 🔧 Dépannage

### Problème: "Désolé, il semble que notre service de chat intelligent soit temporairement indisponible..."
Cela indique que l'API Mistral n'est pas disponible, mais ne vous inquiétez pas ! Le chatbot a un système de fallback intégré qui fournit des réponses prédéfinies utiles.

**Causes possibles :**
- Clé API manquante ou invalide
- Problème de réseau
- Limite de taux dépassée (erreur 429)

**Solutions :**
1. Vérifiez que votre clé API est correcte dans `.env.local`
2. Assurez-vous que votre compte Mistral a des crédits
3. Vérifiez la console pour les erreurs spécifiques
4. Attendez quelques minutes si vous avez une erreur 429

### Problème: Le chatbot répond mais semble utiliser des réponses prédéfinies
Cela signifie que le système de fallback est activé. Vérifiez :
- Que la clé API est bien configurée
- Que le fichier `.env.local` est dans la racine du projet
- Que vous avez redémarré le serveur après avoir ajouté la clé

### Problème: Pas de réponse du tout
- Vérifiez la console pour les erreurs JavaScript
- Assurez-vous que le composant Chatbot est bien inclus dans la page
- Vérifiez que vous avez bien installé toutes les dépendances (`npm install`)

### Problème: Réponses trop longues ou hors sujet
- Ajustez `max_tokens` (réduisez pour des réponses plus courtes)
- Modifiez `temperature` (réduisez pour plus de précision)
- Améliorez le prompt système pour être plus spécifique

### Problème: Le chatbot ne répond pas
- Vérifiez que la clé API est bien dans `.env.local`
- Assurez-vous que le fichier `.env.local` est dans la racine du projet
- Redémarrez le serveur de développement après avoir ajouté la clé

## 📚 Ressources supplémentaires

- [Documentation Mistral AI](https://docs.mistral.ai/)
- [Guide des modèles Mistral](https://docs.mistral.ai/models/)
- [Best practices pour les prompts](https://docs.mistral.ai/guides/prompting/)
- [Pricing Mistral AI](https://mistral.ai/pricing/)