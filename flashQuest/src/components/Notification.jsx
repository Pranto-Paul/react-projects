import { ToastContainer, toast,Bounce, Slide, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

const Notification = () => {
    const notify = () => toast("This is a toast notification !");
  return (
    <div>
        <button onClick={notify}>Notify !</button>
        
        <ToastContainer   transition={Zoom} />
      </div>
  )
}

export default Notification