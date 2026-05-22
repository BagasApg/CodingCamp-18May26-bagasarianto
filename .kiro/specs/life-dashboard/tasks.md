# Tasks

## Task 1: Scaffold HTML structure
Set up `index.html` with header card, 2-column main grid, focus timer card, tasks card, and quick links card. Link `css/style.css` and `js/main.js`.

- [x] Create `index.html` with semantic structure
- [x] Create `css/style.css` placeholder
- [x] Create `js/main.js` placeholder

**Demo:** Page loads with visible card layout.

---

## Task 2: Implement clock and date
Display a live 24h clock and formatted date in the header card, updating every second.

- [x] `updateClock()` function with `setInterval`
- [x] Date formatted as "Weekday, Month Dth, Year"
- [x] Clock formatted as HH:MM:SS

**Demo:** Clock ticks in real time on page load.

---

## Task 3: Implement time-based greeting
Show "Good [period], [name]" where period is derived from the current hour.

- [x] Map hours to morning / afternoon / evening / night
- [x] Read name from localStorage (default: "John")

**Demo:** Greeting changes label based on time of day.

---

## Task 4: Editable name with localStorage
Replace the wave emoji with a "(not your name?)" link that reveals an inline input to change the name.

- [x] Hidden `<form id="nameForm">` with `<input id="nameInput">`
- [x] `editName()` shows form, hides greeting
- [x] `saveName()` saves to localStorage, restores greeting
- [x] "(not your name?)" sits on its own line below the greeting text

**Demo:** User can change name; persists on reload.

---

## Task 5: Randomized motivational quotes
Pick one quote at random from a pool of 7 on each page load and display it in the header.

- [x] Array of 7 quotes with `{ text, author }`
- [x] `Math.random()` selection on load
- [x] Rendered into `<div id="quote">`

**Demo:** Different quote may appear on each reload.

---

## Task 6: Focus timer
25-minute countdown timer with start, stop, and reset controls.

- [x] `focusSeconds` state variable (1500)
- [x] `startTimer()`, `stopTimer()`, `resetTimer()` functions
- [x] Auto-stops at 00:00
- [x] Display formatted as MM:SS

**Demo:** Timer counts down; stop/reset work correctly.

---

## Task 7: Task list with localStorage
Add, complete, and delete tasks. Persist to localStorage.

- [x] `tasks` array loaded from / saved to localStorage
- [x] `addTask()`, `toggleTask()`, `deleteTask()`, `renderTasks()`
- [x] Checkbox toggles `done` state with strikethrough style

**Demo:** Tasks survive page reload.

---

## Task 8: Duplicate task validation
Reject tasks with a name that already exists (case-insensitive) and show an inline warning.

- [x] Case-insensitive check in `addTask()` before push
- [x] `<span id="todoWarning">` shown on duplicate, cleared on success

**Demo:** Adding "Buy milk" when "buy milk" exists shows warning without adding.

---

## Task 9: Quick links with localStorage
Add and delete bookmarked URLs. Persist to localStorage with default links on first load.

- [x] `links` array with default Google / Gmail / Calendar entries
- [x] `addLink()`, `deleteLink()`, `renderLinks()`
- [x] Links open in new tab with `rel="noopener"`

**Demo:** Links persist on reload; defaults appear on first visit.

---

## Task 10: Light/dark theme toggle
Toggle `body.dark` class and update button label accordingly.

- [x] `toggleTheme()` function
- [x] All dark-mode overrides under `body.dark` in CSS
- [x] Button label: "too bright? ☀️" / "too dark? 🌙"

**Demo:** Theme switches visually; button label updates.

---

## Task 11: Input styling
Make task and link inputs visually consistent with their submit buttons (white background in light mode, darker in dark mode).

- [x] `.todo-input`, `.link-input` set to `background: #fff`
- [x] Placeholder opacity raised to `0.6` for readability
- [x] Dark mode overrides retain legibility

**Demo:** Inputs and buttons look like a unified group in both themes.
