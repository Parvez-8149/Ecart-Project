import React from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_USER_KEY } from "../constants";

function Logout(props){
const navigate = useNavigate()

function logoutUser(){
    localStorage.useitem(LOCAL_STORAGE_USER_KEY,null);
    useNavigate("/login");
    

}
return <button onClick={logoutUser}>logout</button>

}
//   
// function SignupButton(props) {
//     let navigate = useNavigate();
  
//     async function handleSubmit(event) {
//       event.preventDefault();
//       await submitForm(event.target);
//       navigate("../success", { replace: true });
//     }
  
//     return <form onSubmit={handleSubmit}>{/* ... */}</form>;
//   }
// export default Logout;
