# KeenKeeper

KeenKeeper is a responsive friendship dashboard built with React and Vite. It helps users keep meaningful relationships active by tracking contact frequency, reviewing interaction history, and logging quick check-ins from each friend's detail page.

## Live Project Focus

- Track friends with realistic profile data and contact goals
- Log `call`, `text`, and `video` interactions directly from the detail page
- Visualize interaction patterns on an analytics page with Recharts

## Technologies Used

- React 19
- React Router
- Tailwind CSS
- DaisyUI
- React Icons
- Recharts
- Vite

## Key Features

- A dashboard-style home page with a custom navbar, banner, summary cards, and responsive friend grid
- A friend detail page with quick check-in actions that create timeline entries and trigger toast notifications
- A timeline and analytics flow powered by shared app state and persisted with `localStorage`

## Data

Friend profiles are loaded from [`public/friends.json`](public/friends.json). The project includes realistic names, tags, bios, goals, and next follow-up dates using the required status values:

- `overdue`
- `almost due`
- `on-track`

## Pages Included

- Home
- Friend Details
- Timeline
- Friendship Analytics
- 404 Error Page

## Extra Touches

- Timeline filtering by interaction type
- Timeline search and sort controls
- Home page loading spinner while friend data is fetched
- SPA redirect support via [`public/_redirects`](public/_redirects)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
