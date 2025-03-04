# To-Do List App

This is a simple To-Do List application built with React. It enables users to manage tasks by adding, editing, and toggling their completion status, with tasks saved in local storage for persistence.

## Features

- **Add Tasks**: Users can input tasks and save them to the list.
- **Edit Tasks**: Existing tasks can be edited for easy updates.
- **Toggle Completion**: Users can mark tasks as completed or view only uncompleted tasks.
- **Persistent Storage**: Uses local storage to retain tasks across page reloads.
- **Dynamic Height Adjustment**: Task list adjusts its height based on the number of tasks for a streamlined UI.

## Live Demo

Check out the live demo here: [Live Demo](https://to-do-list-app-ten-mu.vercel.app/)

## Technologies Used

- React with Hooks (`useState`, `useEffect`)
- UUID for unique task IDs
- Local Storage for persistent data storage

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/bilalzulfiqar-pk/To-Do-List-App-with-ReactJS.git
    ```
2. Navigate into the project directory:
    ```bash
    cd To-Do-List-App-with-ReactJS
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```
    npm run dev
    ```

## Usage

- Type a task in the input field and click "SAVE" to add it to the list.
- Click on an existing task to edit it.
- Check the "Show Finished?" checkbox to toggle the visibility of completed tasks.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
