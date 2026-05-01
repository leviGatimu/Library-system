# Uwimanas Library System

A professionally crafted, minimalist personal library management application. This project focuses on clean design, efficient spatial organization, and a high-end user experience.

**Live Demo:** [https://library-system-5z3rdz7kz-levigatimus-projects.vercel.app/](https://library-system-5z3rdz7kz-levigatimus-projects.vercel.app/)

## 📖 Overview

Uwimanas Library is a React-based web application designed for bibliophiles who value simplicity and elegance. It allows users to curate their personal book collection with a focus on visual clarity and ease of use.


## 🛠️ Technical Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (Modern CSS Grid & Flexbox)
- **Deployment:** Vercel

## 🏗️ Core Features

- **Dynamic Grid Bookshelf:** A responsive layout that automatically adjusts card density based on screen resolution.
- **Sticky Sidebar:** The input form remains accessible even when browsing deep into a large collection.
- **Real-time Updates:** React state management ensures that newly added books appear instantly with a smooth visual presence.
- **Mobile Responsive:** A seamless transition from a split-grid to a stacked mobile view using CSS media queries.

## 🚀 Local Development

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Implementation Details

### The Layout Strategy
The app uses a `display: grid` approach for the top-level container:
```css
.app-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  min-height: 100vh;
}
```
This ensures the bookshelf takes up the remaining available space (`1fr`) while the sidebar remains a constant, reliable width.

### Responsive Logic
At breakpoints below `900px`, the grid reconfigures using `grid-template-columns: 1fr`, ensuring the app remains fully functional on tablets and smartphones.

---

*Crafted with precision for a spectacular reading experience.*
