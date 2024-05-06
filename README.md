# Todo Application

## Overview

This application is a microfrontend Todo List aaplication built with React and TypeScript. It allows users to create, manage and filter todo tasks. The application consists of three microfrontend modules:

1. **TodoList**: Responsible to display todo task list.
2. **TodoItem**: Responsible for rendering individual todo items.
3. **Filter**: Responsible for rendering filter dropdown to filter todo task list.

## Installation

To run this application locally, follow these steps:

1. Clone below repository to your local machine:

   ```bash
       git clone https://github.com/rohittiwariofficial/host-app.git
   ```

2. Navigate to the project directory:

   ```bash
       cd host-app
   ```

3. Install dependencies using npm or yarn:

   ```bash
       npm install
       # or
       yarn install
   ```

4. Start the development server:

   ```bash
       npm start
       # or
       yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- Add new task by entering a task descrition in input field and pressing `Enter`.
- Mark tasks as completed by clicking on the checkbox next to each task.
- Filter the todo tasks list by selecting one of the option of dropdown i.e. all, active and completed.

## Features

- Add new todo task.
- Mark todo task completed or active.
- Filter todo task based on their completionn status (all, active, completed).
- Persistance of the todo tasks using `localStorage` to ensure data persistence across page refreshes.

## Architecture

This application follows a microfrontend architecture, with sepearte module for todo list, rending individual todo items and filter controls. Each module operates independently and contributes to the overall functionality of the application.

## Technologies Used

- React Js
- TypeScript
- HTML5 & CSS3
- Webpack
