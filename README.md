# React Task Manager 

A component-driven Task Manager built with React and Vite for the AUREX Internship Program, Month 2, Week 1.

## Live Demo
https://hamna-task-manager.netlify.app




## Project Summary
This project rebuilds my Month 1 JavaScript Task Manager as a React application. The UI is split into small reusable components, and all task data lives in one state in the `App` component.

## Features
- Add new tasks using a controlled form input
- Display tasks dynamically using list mapping with keys
- Mark a task as complete or undo it
- Delete tasks
- Input validation (empty tasks are not allowed)

## Component Hierarchy
```
App
 ├── Header
 ├── TaskForm   (handles input state and submission)
 └── TaskList   (maps through the tasks array)
      └── TaskItem (shows one task and its actions)
```

## State Flow
- `App` holds the `tasks` array using `useState`.
- `App` passes `addTask`, `toggleTask` and `deleteTask` down to child components as props.
- `TaskForm` calls `onAdd` when the form is submitted.
- `TaskItem` calls `onToggle` and `onDelete` when its buttons are clicked.
- When the state changes, React re-renders the list automatically.

## Tech Stack
- React.js
- Vite
- CSS

## Setup Instructions
1. Clone the repository
```
git clone https://github.com/Hamna-Asif05/-Aurex-Internship-week-1-react-task-manager.git
```
2. Go into the project folder
3. Install dependencies
```
npm install
```
4. Start the development server
```
npm run dev
```
5. Open `http://localhost:5173` in your browser

## Folder Structure
```
week-1-react-task-manager/
├── package.json
├── README.md
├── screenshots/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Header.jsx
        ├── TaskForm.jsx
        ├── TaskList.jsx
        └── TaskItem.jsx
```

## Learning Outcomes
- Setting up a React project with Vite
- Creating reusable functional components
- Passing data and functions using props
- Managing UI state with `useState`
- Handling events (`onClick`, `onChange`, `onSubmit`)
- Building controlled forms with validation
- Rendering lists with unique keys

## Author
Hamna Asif
GitHub: [Hamna-Asif05](https://github.com/Hamna-Asif05)
