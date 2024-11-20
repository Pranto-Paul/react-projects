
# Todo Management Application

This project is a simple Todo management application that allows users to add, update, delete, and toggle the completion status of their tasks. It leverages local storage to persist data and uses the Context API for state management across components.

## Features

- **Add Todos**: Users can add new tasks to their todo list.
- **Update Todos**: Users can edit existing tasks.
- **Delete Todos**: Users can remove tasks from their list.
- **Toggle Completion**: Users can mark tasks as completed or incomplete.
- **Local Storage**: Todos are saved in the browser's local storage, allowing data to persist across sessions.
- **Context API**: Used for managing state and providing todos and actions to components.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd todo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the todo application in action.

## Available Scripts

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run preview`: Previews the production build.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ESLint**: A tool for identifying and fixing code issues.

## License

This project is licensed under the MIT License.
