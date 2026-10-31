# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student:** Yussupov Nurlan
**Group:** SE-2526
**Course:** Web Technologies 1 (Front End), Astana IT University

**Live site:** https://nurlan-byte.github.io/assignment6-jquery/

## Description

A small multi-page website where I practice jQuery: selectors, changing content
and styles, show/hide, fade and slide effects, adding and removing elements,
changing attributes, reading form values and animations with `.animate()`.
A navbar on every page links to all parts of the assignment.

| Page | Tasks | What is inside |
|------|-------|----------------|
| `index.html` | Home | Student info and links to all parts |
| `part1.html` | Task 0, Task 1 | jQuery from CDN, `$(document).ready()`, "jQuery is ready!" in the console, selectors by ID / class / tag, `.text()`, `.html()`, `.css()` |
| `part2.html` | Task 2, Task 3, Task 4 | `.hide()` / `.show()` / `.toggle()`, `.fadeIn()` / `.fadeOut()` / `.fadeToggle()` on an image, collapsible panel with `.slideUp()` / `.slideDown()` / `.slideToggle()` |
| `part3.html` | Task 5, Task 6, Task 7 | List with `.append()`, `.prepend()`, `.remove()`; change image `src` and link `href` with `.attr()`; live Name / Email output with `.val()` and `.text()` |
| `part4.html` | Task 8, Task 9, Task 10 | Square grows and moves; step-by-step animation (right → down → shrink → back); opacity + size + movement in one `.animate()` |
| `part5.html` | Task 11 | Mini project: **Accordion Menu** with slide animations |

## Technologies

- HTML5
- CSS3 (`css/style.css`)
- jQuery 3.7.1 from CDN (`https://code.jquery.com/jquery-3.7.1.min.js`)
- One JavaScript file per part in `js/`

## Main jQuery methods used

- `$(document).ready(function () { ... })` — run code after the page is loaded
- `$("#id")`, `$(".class")`, `$("tag")` — select elements
- `.click()`, `.on("input", ...)` — handle events
- `.text()`, `.html()`, `.css()`, `.attr()`, `.val()` — read and change elements
- `.hide()`, `.show()`, `.toggle()`, `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`,
  `.slideUp()`, `.slideDown()`, `.slideToggle()` — effects
- `.append()`, `.prepend()`, `.remove()` — add and remove elements
- `.animate({ ... }, time)` — animations

## How to run

**Online:** open https://nurlan-byte.github.io/assignment6-jquery/

**Locally:**

```bash
git clone https://github.com/Nurlan-byte/assignment6-jquery.git
cd assignment6-jquery
```

Then open `index.html` in a browser (or use the Live Server extension in VS Code).
An internet connection is needed because jQuery is loaded from a CDN.
To see the message from Task 0, open the browser console: **F12 → Console**.

## Project structure

```
assignment6-jquery/
├── index.html      # Home page
├── part1.html      # Task 0-1  (Setup, Selectors & CSS)
├── part2.html      # Task 2-4  (Effects)
├── part3.html      # Task 5-7  (DOM Manipulation)
├── part4.html      # Task 8-10 (Animations)
├── part5.html      # Task 11   (Accordion Menu)
├── css/
│   └── style.css
├── js/
│   ├── part1.js
│   ├── part2.js
│   ├── part3.js
│   ├── part4.js
│   └── part5.js
├── images/         # pictures for fade and attribute tasks
└── README.md
```
