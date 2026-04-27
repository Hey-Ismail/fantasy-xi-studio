# Fantasy XI Studio

A fantasy football squad builder built with React and Vite.

Users can:

- claim free credits,
- browse available football players,
- select players based on budget,
- switch between available and selected squads,
- remove selected players and recover budget.

The app focuses on interactive team-building with a clean, card-based UI and toast feedback for key actions.

## Live Project Goal

Build an engaging Dream 11 style football selection experience where budget management and player choices drive the flow.

## Core Features

- Budget wallet shown in the navbar.
- Free credit claim from the hero section (+100 once per session).
- Player marketplace from local JSON data (25 athletes).
- Budget validation before selecting a player.
- Real-time selected player count.
- Toggle tabs:
  - Available players
  - Selected players
- Remove player action with budget refund.
- Toast notifications for success, info, and warning states.
- Responsive layout for mobile and desktop.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- DaisyUI 5
- React Toastify
- Lucide React (icons)
- ESLint 10

## Project Architecture

Main flow:

1. `App` initializes base budget (`100`) and orchestrates major sections.
2. `Hero` allows one-time free credit claim (`+100`).
3. `PlayerCards` handles tab state and selected players state.
4. `SinglePlayerCard` processes selection and budget deduction.
5. `SingleSelectedPlayer` handles player removal and budget refund.
6. `Navbar` always reflects current budget.

## Data Source

Data is loaded from `public/athletes.json`.

- Total players: 25
- Top-level fields:
  - `id`
  - `name`
  - `club`
  - `country`
  - `position`
  - `jersey_number`
  - `market_value`
  - `player_image`
  - `achievements`
  - `hobby`

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd fantasy-xi-studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The app will run at the local Vite URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Folder Structure

```text
fantasy-xi-studio/
|- public/
|  |- athletes.json
|  |- players/
|- src/
|  |- components/
|  |  |- footer/
|  |  |- hero-section/
|  |  |- navbar/
|  |  |- playercards/
|  |  |- ui/
|  |- App.jsx
|  |- main.jsx
|  |- App.css
|  |- index.css
|- package.json
|- vite.config.js
|- eslint.config.js
```

## Gameplay Rules Implemented

- Initial wallet: 100
- Free credit can be claimed once: +100
- Selecting player subtracts `market_value`
- If budget is not enough, selection is blocked and warning is shown
- Removing selected player adds back `market_value`

## UI and UX Highlights

- Dark hero banner with football theme assets
- Card-based player presentation with stats and trophies
- Animated remove action in selected card
- Mobile menu for navigation links
- Toast-driven feedback for major actions

## Potential Improvements

- Persist selected players and wallet in local storage
- Add search, filter, and sort by position/price/country
- Add formation constraints (e.g., 4-3-3 validation)
- Add unit and integration tests
- Improve state sync so removed players can be re-selected directly
- Add backend API integration instead of static JSON

## Known Notes

- The credit claim and selected-card button states are currently session-based in component state.
- Toast container is mounted in `main.jsx`.

This project is intended for learning and portfolio use.

Live link --> https://fantasy-xi-studio.netlify.app/
