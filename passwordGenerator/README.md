
# Password Generator
### React + Vite

This project is a password generator built using React and Vite. I used `useState`, `useEffect`, `useRef`, and `useCallback` to make this project. In this section, I will explain how I made the project.

I used the `useState` hook to store the password length and complexity in state variables. The state variables are then used to generate the password when the user clicks the generate button.

I used the `useEffect` hook to generate the password when the component mounts. I also used it to update the password when the user changes the password length or complexity.

I used the `useRef` hook to get a reference to the input element that is used to copy the generated password.

I used the `useCallback` hook to memoize the generate password function so that it is only recreated when the password length or complexity changes.
 

## Features
Currently, two official plugins are available:

- Generate secure passwords
- Customize password length and complexity like adding number and character
- Responsive design

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd passwordGenerator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the password generator in action.

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
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

