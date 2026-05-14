# CPIT-405 Labs

Web development labs for the **CPIT-405** course at King Abdulaziz University.

**Student:** Ali Saleh Alghamdi

---

## Labs Overview

| Lab | Topic | Technologies |
|-----|-------|-------------|
| [Lab 1](Lab-1/) | Introduction & Landing Page | HTML |
| [Lab 2](Lab-2/) | HTML Basics — text formatting, links, images | HTML |
| [Lab 2.1](Lab-2.1/) | HTML Continued — headings, structure, navigation | HTML |
| [Lab 3](Lab-3/) | CSS Structure & Selector Priority | HTML, CSS |
| [Lab 4](Lab-4/) | HTML Forms — Auto Parts Order Form | HTML, CSS |
| [Lab 5](Lab-5/) | JavaScript — NBA Player Stats Dashboard | HTML, CSS, JS |
| [Lab 6](Lab-6/) | JavaScript — Like/Dislike with Cookies | HTML, CSS, JS |
| [Lab 7](Lab-7/) | Async JavaScript — Unsplash Image Search | HTML, CSS, JS, API |
| [Lab 8](Lab-8/) | React — Link Shrinker (URL Shortener) | React, React Router |
| [Lab 9](Lab-9/) | React — Recipe Search (Spoonacular API) | React, React Router, API |
| [Lab 10](Lab-10/Lab-10.html) | PHP & MariaDB — Full MVC Products App | PHP, MariaDB, MVC |

---

## Lab Details

### Lab 1 — Introduction
A simple landing page displaying the student name with navigation to Lab 2.

### Lab 2 — HTML Basics
Covers core HTML tags: paragraphs, links, images, `<strong>`, `<em>`, `<sup>`, `<sub>`, and `<span>`.

### Lab 2.1 — HTML Continued
Extends Lab 2 with proper heading hierarchy (`h1`–`h3`), sections, and inter-page navigation.

### Lab 3 — CSS Structure & Properties
Demonstrates CSS selector specificity and priority rules. Includes an image preview section and a results table showing computed colors for different selectors.

### Lab 4 — HTML Forms
A styled order form for "Great Auto Parts" with fields for customer info, vehicle details, spare part selection, and comments. Uses various input types (`text`, `email`, `tel`, `number`, `date`).

### Lab 5 — JavaScript (NBA Player Stats Dashboard)
An interactive dashboard that displays NBA player statistics with:
- 🔍 Search and filter by team
- 🔄 Sortable table columns
- 🌙 Dark mode toggle
- Dynamic data rendering via JavaScript

### Lab 6 — JavaScript (Like/Dislike with Cookies)
A like/dislike page with cookie-based state management:
- 👍👎 Like and dislike buttons with counters
- 💬 Comment system (one comment per session)
- 🍪 Cookies to prevent duplicate voting/commenting
- 🔄 Reset button to clear all state and vote again

### Lab 7 — Async JavaScript (Unsplash Image Search)
Demonstrates three approaches to async HTTP requests:
- **XHR** (XMLHttpRequest) with event listeners
- **Fetch + Promise** chaining
- **Fetch + Async/Await**

Requires a free [Unsplash API key](https://unsplash.com/developers) — replace `YOUR_UNSPLASH_ACCESS_KEY` in `Lab-7/script.js`.

### Lab 8 — React (Link Shrinker)
A URL shortener built with React featuring:
- `useState` for state management
- Event handling (shorten button, input change)
- React Router with Home and About pages
- Custom or auto-generated short codes

### Lab 9 — React (Recipe Search)
A recipe search app built with React featuring:
- `useEffect` to load default recipes on mount
- `useState` + user-triggered `fetch` for search
- Recipe detail pages with ingredients and instructions
- React Router for navigation

Requires a free [Spoonacular API key](https://spoonacular.com/food-api) — replace `YOUR_SPOONACULAR_API_KEY` in `Lab-9/Lab-9.html`.

### Lab 10 — PHP & MariaDB (Static Preview)
A full Model-View-Controller (MVC) PHP application simulation demonstrating:
- A custom Power function (implemented in JS for preview)
- Object-Oriented Programming (OOP) with class diagrams
- Database simulation using `localStorage`
- Products list view and CRUD operations simulator

**Note:** The original PHP version is available in `Lab-10/index.php` for local execution with XAMPP.

---

## How to Run

Open any `Lab-X.html` file directly in a browser — no build step needed (Labs 7–10 use static previews or CDN-loaded scripts).

**GitHub Pages:** [https://bytixty1.github.io/CPIT-405-Labs/](https://bytixty1.github.io/CPIT-405-Labs/)
