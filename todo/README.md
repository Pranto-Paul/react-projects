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

## ⚠️Some Issues

### Why does interchanging the positions of useEffect hooks not work?

---

#### Working

```
useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
    console.log(todos);
}, []);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
}, [todos]);
```

#### Not Working

```
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
}, [todos]);

useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
    console.log(todos);
}, []);

```

### Reason:

- **Initialization Issue:**
  - In the working order, the first useEffect initializes the todos state from localStorage on component mount ([] dependency). This ensures that setTodos is called with the stored values before any updates occur.
  - When the order is interchanged:
    The second useEffect runs first and immediately writes the (initially empty) todos state to localStorage, overwriting any existing stored todos with an empty array.
    When the first useEffect runs after that, it retrieves the empty array just stored, so the original todos are lost.

## License

This project is licensed under the MIT License.
