# Design

## Overview
A static, single-page dashboard built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no backend. All state is stored in `localStorage`.

## Architecture

```
revou-coding-camp/
├── index.html       # Structure and markup
├── css/
│   └── style.css    # All styles including dark mode
└── js/
    └── main.js      # All logic (clock, timer, tasks, links, quotes, theme)
```

## UI Layout

```
┌─────────────────────── Header Card ───────────────────────┐
│  Good morning, John                                        │
│  (not your name?)                                          │
│  Friday, May 22nd, 2026                                    │
│  23:15:00                                                  │
│  "Quote text..." — Author                                  │
│                                        [too bright? ☀️]   │
└────────────────────────────────────────────────────────────┘

┌──── Focus Timer ─────┐  ┌──────────── Tasks ─────────────────┐
│       25:00           │  │  [New task...............]  [Add]  │
│  [Start][Stop][Reset] │  │  ☐ Buy groceries           [✕]    │
└───────────────────────┘  │  ☑ ~~Read docs~~            [✕]   │
                           └────────────────────────────────────┘
┌──────────────────── Quick Links ───────────────────────────┐
│  [Name]  [https://...]  [Add]                              │
│  [Google ✕]  [Gmail ✕]  [Calendar ✕]                      │
└────────────────────────────────────────────────────────────┘
```

## Component Design

### Header Card
- Greeting: dynamic text built in JS, re-rendered every clock tick
- Name edit: hidden `<form>` toggled by "(not your name?)" button; submits on Enter
- Date & clock: updated via `setInterval` every 1000ms
- Quote: selected once on page load from a hardcoded array

### Focus Timer
- State: `focusSeconds` (integer), `focusInterval` (interval ID or null)
- Start: creates interval, decrements `focusSeconds` each second
- Stop: clears interval
- Reset: clears interval, resets `focusSeconds` to 1500

### Task List
- State: `tasks` array `[{ name, done }]` in localStorage key `"tasks"`
- Duplicate check: case-insensitive match before push; shows `#todoWarning` on fail
- Render: full re-render of `<ul>` on every state change

### Quick Links
- State: `links` array `[{ name, url }]` in localStorage key `"links"`
- Default links injected only when localStorage is empty (`null`)
- Render: full re-render of `<ul>` on every state change

### Theme
- Toggle: `document.body.classList.toggle('dark')`
- All dark-mode overrides scoped under `body.dark` in CSS

## Styling Approach
- Glassmorphism cards: `background: rgba(255,255,255,0.45)`, `backdrop-filter: blur(16px)`
- Light background: purple-to-pink gradient
- Dark background: navy gradient
- Inputs match button background (`#fff`) in light mode for readability
- Placeholder opacity `0.6` for legibility
