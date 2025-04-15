# LV-reacts 
# Lizbeth Vazquez — Developer Portfolio 💻✨

Welcome to my personal web developer portfolio built using **ReactJS**! This project showcases who I am as a full stack web developer, what I’ve built, and includes a private admin panel for me to manage and post new projects.

---

## 🌐 Live Site

(https://lv-reactjs.onrender.com/)

---

## 📸 Features

- 🔥 Fully custom-built React portfolio
- 🧑‍💻 Admin panel to post & manage projects (private backend)
- 🎨 Styled with SCSS for clean, modern, and techy design
- 🧩 Modular components & pages
- 🖼️ Dynamic project grid (images, GitHub links, and descriptions)
- 📱 Mobile responsive (coming soon if not done yet!)

---

## 🛠 Tech Stack

| Tech           | What it's for                  |
|----------------|--------------------------------|
| React          | Frontend structure             |
| SCSS           | Styling                        |
| React Router   | Page routing                   |
| Axios          | Connecting frontend to backend |
| Node.js        | Backend (admin panel)          |
| Express        | Backend server/API             |
| MongoDB        | Project data storage           |
| Render         | (Optional) Backend deployment  |

---

## 🗂 File Structure (Simplified)
my-portfolio/
├── client/           # React Frontend
│   ├── src/
│   │   ├── pages/    # Home, Projects, About, Contact, Admin
│   │   ├── components/ Navbar, ProjectCard
│   │   └── services/ # Axios API
├── server/           # Node.js Backend (private)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
---

## 🚀 Setup Instructions (Local)

1. **Clone the repo**  
   ```bash
   git clone https://github.com/liz061204/LV-reactjs
cd client
npm install
npm start
cd ../server
npm install
npm run dev
Make sure you create a .env file in /server with your MongoDB connection string.

⸻

🔒 Admin Panel (Private)

The /admin route is for you only to post new projects. You’ll later protect it with either:
	•	Basic password prompt
	•	Firebase/Auth0 login
	•	or JWT auth

⸻

🙋‍♀️ About Me

I’m Lizbeth Vazquez, a full-stack developer with a passion for clean code, creative design, and building tech with purpose.

“I’m not just building websites — I’m building solutions.” ✨
