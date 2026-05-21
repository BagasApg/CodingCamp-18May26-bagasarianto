// Quote
const quotes = [
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "The secret of your future is hidden in your daily routine.", author: "Mike Murdock" },
  { text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "You don't rise to the level of your goals, you fall to the level of your systems.", author: "James Clear" },
  { text: "The difference between who you are and who you want to be is what you do.", author: "Bill Phillips" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
];
const q = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('quote').innerHTML = `"${q.text}" <span>— ${q.author}</span>`;

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById('timer').textContent = now.toLocaleTimeString('en-US', { hour12: false });

  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const month = now.toLocaleDateString('en-US', { month: 'long' });
  const year = now.getFullYear();
  const d = now.getDate();
  const suffix = ['th','st','nd','rd'][(d % 100 > 10 && d % 100 < 14) ? 0 : Math.min(d % 10, 3)] || 'th';
  document.getElementById('date').textContent = `${day}, ${month} ${d}${suffix}, ${year}`;

  const h = now.getHours();
  const period = h < 12 ? 'morning' : h < 17 ? 'afternoon' : h < 21 ? 'evening' : 'night';
  const name = localStorage.getItem('userName') || 'John';
  document.getElementById('greeting').innerHTML =
    `<span>Good ${period}, ${name}</span><button class="name-edit-btn" onclick="editName()">(not your name?)</button>`;
}

updateClock();
setInterval(updateClock, 1000);

function editName() {
  const name = localStorage.getItem('userName') || 'John';
  document.getElementById('greeting').style.display = 'none';
  const form = document.getElementById('nameForm');
  const input = document.getElementById('nameInput');
  input.value = name;
  form.style.display = '';
  input.focus();
  input.select();
}

function saveName(e) {
  e.preventDefault();
  const val = document.getElementById('nameInput').value.trim();
  if (val) localStorage.setItem('userName', val);
  document.getElementById('nameForm').style.display = 'none';
  document.getElementById('greeting').style.display = '';
  updateClock();
}

// Theme
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = isDark ? 'too dark? 🌙' : 'too bright? ☀️';
}

// Focus Timer
let focusSeconds = 25 * 60;
let focusInterval = null;

function renderFocus() {
  const m = String(Math.floor(focusSeconds / 60)).padStart(2, '0');
  const s = String(focusSeconds % 60).padStart(2, '0');
  document.getElementById('focusDisplay').textContent = `${m}:${s}`;
}

function startTimer() {
  if (focusInterval) return;
  focusInterval = setInterval(() => {
    if (focusSeconds <= 0) { clearInterval(focusInterval); focusInterval = null; return; }
    focusSeconds--;
    renderFocus();
  }, 1000);
}

function stopTimer() {
  clearInterval(focusInterval);
  focusInterval = null;
}

function resetTimer() {
  stopTimer();
  focusSeconds = 25 * 60;
  renderFocus();
}

// Todos
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (task.done ? ' done' : '');
    li.innerHTML = `
      <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleTask(${i})">
      <span>${task.name}</span>
      <button onclick="deleteTask(${i})">✕</button>
    `;
    list.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  const input = e.target.querySelector('.todo-input');
  const warning = document.getElementById('todoWarning');
  const val = input.value.trim();
  if (tasks.some(t => t.name.toLowerCase() === val.toLowerCase())) {
    warning.textContent = 'Task already exists.';
    return;
  }
  warning.textContent = '';
  tasks.push({ name: val, done: false });
  input.value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  saveTasks();
  renderTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  renderTasks();
}

renderTasks();


// Quick Links
const defaultLinks = [
  { name: 'Google', url: 'https://google.com' },
  { name: 'Gmail', url: 'https://mail.google.com' },
  { name: 'Calendar', url: 'https://calendar.google.com' },
];

let links = JSON.parse(localStorage.getItem('links') || 'null') ?? defaultLinks;

function saveLinks() {
  localStorage.setItem('links', JSON.stringify(links));
}

function renderLinks() {
  const list = document.getElementById('linkList');
  list.innerHTML = '';
  links.forEach((link, i) => {
    const li = document.createElement('li');
    li.className = 'link-item';
    li.innerHTML = `
      <a href="${link.url}" target="_blank" rel="noopener">${link.name}</a>
      <button onclick="deleteLink(${i})">✕</button>
    `;
    list.appendChild(li);
  });
}

function addLink(e) {
  e.preventDefault();
  const name = document.getElementById('linkName').value.trim();
  const url = document.getElementById('linkUrl').value.trim();
  links.push({ name, url });
  e.target.reset();
  saveLinks();
  renderLinks();
}

function deleteLink(i) {
  links.splice(i, 1);
  saveLinks();
  renderLinks();
}

renderLinks();
