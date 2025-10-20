# MOWOKI - Home for Africa

## Vue d'ensemble
Site web professionnel pour MOWOKI, une agence de voyage spécialisée dans les destinations africaines. Le site présente l'agence, ses services, et permet aux visiteurs de découvrir différentes destinations et de contacter l'équipe.

## État actuel
- **Phase**: Développement MVP
- **Dernière mise à jour**: Octobre 2025
- **Statut**: Frontend complété, Backend en cours

## Architecture du Projet

### Frontend
- **Framework**: React avec TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI
- **Thème**: Support mode clair/sombre
- **Typographie**: Playfair Display (serif), Inter (sans-serif), Montserrat (accents)
- **Palette de couleurs**: Vert forêt profond (primary), terracotta chaud (secondary), bleu sarcelle (accent)

### Pages implémentées
1. **Accueil** (`/`)
   - Hero section immersive avec image de savane
   - Section introduction sur MOWOKI
   - Galerie de 7 destinations (Sénégal, Kenya, Maroc, Tanzanie, Afrique du Sud, Madagascar, Zanzibar)
   - Services (Tours personnalisés, Guides experts, Expériences authentiques)
   - Témoignages clients
   - CTA final avec image de plage

2. **À Propos** (`/a-propos`)
   - Hero avec image d'équipe
   - Histoire et mission de MOWOKI
   - Valeurs (Authenticité, Passion, Durabilité, Excellence)
   - Présentation de l'équipe
   - Statistiques (10+ années, 7 pays, 500+ voyageurs)

3. **Contact** (`/contact`)
   - Formulaire de contact avec validation
   - Informations de contact (email, téléphone, WhatsApp, adresse)
   - Heures d'ouverture
   - Temps de réponse garanti (24h)

### Composants principaux
- `Navigation`: Header sticky avec menu responsive et toggle thème
- `Footer`: Informations complètes avec liens et réseaux sociaux
- `ThemeProvider`: Gestion du thème clair/sombre avec localStorage

### Backend
- **Framework**: Express.js
- **Storage**: MemStorage (in-memory)
- **API Endpoints**:
  - `POST /api/contact`: Soumission du formulaire de contact

### Schéma de données
```typescript
interface ContactMessage {
  id: string;
  nom: string;
  email: string;
  telephone?: string;
  destination: string;
  message: string;
  createdAt: Date;
}
```

## Images utilisées
Toutes les images sont stockées dans `attached_assets/stock_images/`:
- Hero: Savane africaine au coucher du soleil
- Destinations: Images haute qualité pour chaque pays
- À Propos: Image d'équipe de guides
- Culture: Expériences authentiques locales

## Design Guidelines
Le projet suit des guidelines strictes définies dans `design_guidelines.md`:
- Espacement généreux et cohérent
- Animations subtiles et professionnelles
- Responsive design mobile-first
- Contraste WCAG AA respecté
- Typographie hiérarchisée

## Commandes
- `npm run dev`: Démarre le serveur de développement (frontend + backend)
- Port: 5000 (frontend et backend sur le même port)

## Prochaines étapes
- Tester le formulaire de contact end-to-end
- Vérifier la responsivité sur tous les breakpoints
- Valider les transitions de thème
- Tests e2e avec Playwright
