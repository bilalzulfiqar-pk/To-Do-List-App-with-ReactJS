# To-Do List App

This is a simple To-Do List application built with React. It enables users to manage tasks by adding, editing, and toggling their completion status, with tasks saved in local storage for persistence. It also supports Progressive Web App (PWA) functionality, allowing users to install the app on their devices for offline usage.

## Features

- **Add Tasks**: Users can input tasks and save them to the list.
- **Edit Tasks**: Existing tasks can be edited for easy updates.
- **Toggle Completion**: Users can mark tasks as completed or view only uncompleted tasks.
- **Persistent Storage**: Uses local storage to retain tasks across page reloads.
- **Dynamic Height Adjustment**: Task list adjusts its height based on the number of tasks for a streamlined UI.
- **PWA Support**: The app can be installed on your device and used offline.

## Live Demo

Check out the live demo here: [Live Demo](https://to-do-list-app-ten-mu.vercel.app/)

## Technologies Used

- React with Hooks (`useState`, `useEffect`)
- UUID for unique task IDs
- Local Storage for persistent data storage
- **Progressive Web App (PWA)**: Supports installation and offline usage
- Vite for fast development and build setup

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
    ```bash
    npm run dev
    ```

## PWA Setup

This app has been configured as a Progressive Web App (PWA), enabling the following feature:

- **Manifest**: The app includes a manifest file, which allows users to add the app to their home screen with a custom icon and splash screen.
  
### How to Test the PWA

1. Open the app in Chrome.
2. Go to Chrome DevTools (`F12` or `Ctrl+Shift+I`).
3. Go to the **Application** tab.
4. Check the **Manifest** section to see your app’s PWA settings.
5. Try installing the app by clicking the install icon in the address bar or use the mobile device’s install prompt.

## Usage

- Type a task in the input field and click "SAVE" to add it to the list.
- Click on an existing task to edit it.
- Check the "Show Finished?" checkbox to toggle the visibility of completed tasks.
