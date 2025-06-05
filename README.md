# 🧩 Todo MFE – Host App

This project is the **Host App** in a **React + TypeScript** based Micro Frontend (MFE) architecture using **Webpack 5 Module Federation**. It dynamically loads independent, remote components to render a modular Todo List UI.

---

## 🧠 Architecture Overview

The host app integrates three remote modules from `todo-mfe-remote`:

1. **TodoList** – Renders the list of tasks  
2. **TodoItem** – Represents each individual task  
3. **Filter** – Dropdown to filter tasks by `All`, `Active`, or `Completed`

> These are loaded using Module Federation from the remote app running on a separate port.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohittiwariofficial/todo-mfe-host.git
cd todo-mfe-host
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm start
# or
yarn start
```

> ⚠️ Before starting this app, make sure `todo-mfe-remote` is running on [http://localhost:3001](http://localhost:3001)

---

## ✅ Features

- Add, complete, and filter todo tasks  
- Microfrontend architecture with remote modules  
- Dynamic module loading via Webpack 5 Module Federation  
- Task persistence using `localStorage`

---

## 🧩 Related Microfrontend

This host app consumes components from:

👉 [`todo-mfe-remote`](https://github.com/rohittiwariofficial/todo-mfe-remote)

---

## 🔧 Tech Stack

- React  
- TypeScript  
- Webpack 5 (Module Federation)  
- HTML5, CSS3

---

## 🙋‍♂️ Author

**Rohit Tiwari**  
Senior MERN / Backend Developer  
[LinkedIn](https://www.linkedin.com/in/rohittiwariofficial)

---

## 📜 License

MIT – free to use and modify.
