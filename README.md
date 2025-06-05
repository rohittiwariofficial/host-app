# 🧩 Todo Application – Micro Frontend (Host App)

This project is a **Micro Frontend (MFE)** Todo List application built with **React** and **TypeScript**. It serves as the **host container** that integrates independent remote MFE modules via **Webpack 5 Module Federation**.

---

## 🧠 Architecture Overview

The app is structured using a microfrontend architecture and loads three independent modules from the remote app:

1. **TodoList** – Displays the list of todo tasks  
2. **TodoItem** – Renders individual todo task items  
3. **Filter** – Dropdown to filter tasks by status (All, Active, Completed)

These modules are **federated and consumed** from the remote MFE:

🔗 [`remote-todo-app`](https://github.com/rohittiwariofficial/remote-todo-app)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohittiwariofficial/host-app.git
cd host-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm start
# or
yarn start
```

> ⚠️ Make sure the [remote-todo-app](https://github.com/rohittiwariofficial/remote-todo-app) is running locally on port `3001`.

---

## ✅ Usage

- Add a new task using the input field (press `Enter` to submit).
- Mark tasks as completed via checkbox.
- Use the dropdown to filter by `All`, `Active`, or `Completed`.

---

## 🔍 Features

- Add, complete, and filter todo tasks
- Microfrontend architecture with modular components
- Federated module loading via Webpack Module Federation
- Data persisted via `localStorage`

---

## 🔧 Tech Stack

- React + TypeScript
- Webpack 5 + Module Federation
- HTML5, CSS3
- Microfrontend Architecture (Host)

---

## 📦 Related Micro Frontend

This host app consumes modules from:

👉 [`remote-todo-app`](https://github.com/rohittiwariofficial/remote-todo-app)

---

## 🙋‍♂️ Author

**Rohit Tiwari**  
Senior MERN / Backend Developer  
[LinkedIn](https://www.linkedin.com/in/rohittiwariofficial)

---
