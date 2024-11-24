import React from 'react'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Login></Login>
      <ToastContainer />
      
    </div>
  )
}

export default App