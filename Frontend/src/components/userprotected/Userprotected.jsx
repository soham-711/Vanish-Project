import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized404 from '../Unauthorized/Unauthorized404';

function Userprotected({children}) {
const navigate=useNavigate()
    const token=localStorage.getItem('authToken')
useEffect(()=>{
if(!token){
    toast.error("please login in this website first")
        
    setTimeout(() => {
        navigate("/user-login");
        
    }, 2000);}

},[token])
  return (
<>
<ToastContainer />
{token?children:<Unauthorized404/>}
</>
    
  )
}

export default Userprotected