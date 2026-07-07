# TiiBnTick Landing

Hub central Next.js de l'écosystème TiiBnTick.

## Démarrage

```bash
cp .env.example .env.local
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) — redirige vers `/fr` par défaut.

## Structure

- `/` — Page principale
- `/start` — Choix du type de compte → inscription plateforme
- `/login` — Hub de connexion par plateforme
- `/platforms/[slug]` — Landing dédiée (link, go, agency, point, freelancer, market)

## i18n

Locales : `fr` (défaut), `en` — fichiers dans `messages/`.

## Configuration

Toutes les URLs externes sont dans `.env.local` (voir `.env.example`).

Thème Noël : `NEXT_PUBLIC_SEASONAL_THEME=noel` (vide pour désactiver).
