# Requirements

## Introduction
A single-page personal productivity dashboard that runs entirely in the browser with no backend or build tools. It helps users stay focused and organized throughout the day.

## Requirements

### Requirement 1: Personalized Greeting
**User Story:** As a user, I want to see a greeting that uses my name and reflects the time of day, so the dashboard feels personal.

#### Acceptance Criteria
1. WHEN the page loads THEN the greeting displays "Good [morning/afternoon/evening/night], [name]"
2. WHEN the user clicks "(not your name?)" THEN an inline input appears pre-filled with the current name
3. WHEN the user submits the input THEN the new name is saved to localStorage and the greeting updates
4. WHEN the page is reloaded THEN the saved name persists

---

### Requirement 2: Date & Clock
**User Story:** As a user, I want to see the current date and a live clock so I always know the time.

#### Acceptance Criteria
1. WHEN the page loads THEN the current date is displayed in "Weekday, Month Dth, Year" format
2. WHEN the page loads THEN a live clock updates every second in 24h format (HH:MM:SS)

---

### Requirement 3: Motivational Quote
**User Story:** As a user, I want to see an inspiring quote each time I open the dashboard to start my day with motivation.

#### Acceptance Criteria
1. WHEN the page loads THEN one quote is randomly selected from a pool of at least 6 quotes
2. THEN the quote and its author are displayed in the header card
3. WHEN the page is reloaded THEN a different quote may appear

---

### Requirement 4: Focus Timer
**User Story:** As a user, I want a Pomodoro-style focus timer so I can manage my work sessions.

#### Acceptance Criteria
1. WHEN the page loads THEN the timer displays 25:00
2. WHEN the user clicks Start THEN the timer counts down every second
3. WHEN the user clicks Stop THEN the countdown pauses
4. WHEN the user clicks Reset THEN the timer returns to 25:00
5. WHEN the timer reaches 00:00 THEN it stops automatically

---

### Requirement 5: Task List
**User Story:** As a user, I want to manage a list of tasks so I can track what needs to be done.

#### Acceptance Criteria
1. WHEN the user submits the task form THEN a new task is added to the list
2. WHEN a task name already exists (case-insensitive) THEN the task is rejected and a warning is shown below the input
3. WHEN the user checks a task's checkbox THEN the task is marked as done with a strikethrough
4. WHEN the user clicks ✕ on a task THEN it is removed from the list
5. WHEN the page is reloaded THEN all tasks persist via localStorage

---

### Requirement 6: Quick Links
**User Story:** As a user, I want to save and access frequently visited URLs quickly.

#### Acceptance Criteria
1. WHEN the page loads for the first time THEN default links (Google, Gmail, Calendar) are shown
2. WHEN the user submits the link form THEN a new link is added
3. WHEN the user clicks a link THEN it opens in a new tab
4. WHEN the user clicks ✕ on a link THEN it is removed
5. WHEN the page is reloaded THEN all links persist via localStorage

---

### Requirement 7: Theme Toggle
**User Story:** As a user, I want to switch between light and dark mode to suit my environment.

#### Acceptance Criteria
1. WHEN the page loads THEN light mode is active by default
2. WHEN the user clicks the toggle button THEN the theme switches between light and dark
3. THEN the button label updates to reflect the current state ("too bright? ☀️" / "too dark? 🌙")
