# AstroFeed
---
# 📋 **Trello Cards with Descriptions**
---

### 📦 Project Setup

**Title:** Setup AstroFeed Project  
**Description:**

- Initialize a new Next.js 14 project using TypeScript
- Install TailwindCSS using PostCSS and configure it
- Setup basic layout with Navbar and Footer components
- Configure prettier & ESLint for code consistency

**Checklist:**

- [X] Init project: `npx create-next-app@latest --ts`
- [X] Install TailwindCSS
- [X] Create basic layout and reuse it across pages

---

### 🧠 Home Page

**Title:** Create Home Page Layout  
**Description:**

- Design a beautiful landing page using TailwindCSS
- Briefly explain what the app does
- Include a featured section for Astronomy Picture of the Day preview
- Add navigation buttons to APOD, News, and Launch pages

**Checklist:**

- [ ] Design hero banner
- [ ] Add preview of latest APOD
- [ ] Add buttons or links to explore features

---

### 🌌 APOD Page (Astronomy Picture of the Day)

**Title:** Build APOD Page with NASA API  
**Description:**

- Integrate NASA's APOD API
- Display image, title, date, and explanation
- Use `getServerSideProps` or React Server Components
- Handle API loading and error states

**Checklist:**

- [ ] Fetch APOD from NASA API
- [ ] Render image and metadata
- [ ] Add loading/error fallback

---

### 📰 Space News

**Title:** Integrate Spaceflight News API  
**Description:**

- Use Spaceflight News API to fetch latest space news
- Display news in responsive card layout
- Include title, summary, image (if any), and link to article

**Checklist:**

- [ ] Fetch and map over articles
- [ ] Display 6–10 latest articles
- [ ] Add "Read More" link per article

---

### 🚀 Launch Schedule

**Title:** Display Upcoming Launches  
**Description:**

- Fetch from Launch Library 2
- Show name, date/time, mission, provider
- Highlight today's or tomorrow's launches

**Checklist:**

- [ ] Fetch launch data
- [ ] Format and display mission schedule
- [ ] Add badge for status (e.g., success, planned)

---

### 👨‍🚀 About Page

**Title:** Build Static About Page  
**Description:**

- Describe what AstroFeed is about
- Mention the goals of the learning journey
- Introduce each team member with name and GitHub profile link

**Checklist:**

- [ ] Write purpose and tech used
- [ ] Add team section
- [ ] Make responsive layout

---

### 🧪 Utilities & Error Handling

**Title:** Add Error & Loading UI Components  
**Description:**

- Reusable UI components for loading and error handling
- Improve user experience during API calls

**Checklist:**

- [ ] Create `Loading.tsx` component
- [ ] Create `Error.tsx` component
- [ ] Reuse across all pages

---

### 🔍 Search & Filter (Bonus)

**Title:** Add Search in News Page (Optional)  
**Description:**

- Allow filtering articles by keyword
- Use client-side state management

**Checklist:**

- [ ] Add input field
- [ ] Filter articles using `includes()`

---

If you'd like, I can also help you generate the starter Next.js boilerplate repo with folder structure, Tailwind config, etc.

Let me know when you’re ready to assign roles to students!
