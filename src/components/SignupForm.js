import { useState } from "react";

import {LS_SIGNUP_INFO} from "../constants"
import updateInputValue from "../utills/general";
import { useNavigate } from "react-router-dom";
import "./Style.css";





    export default function SignupForm(props){
    const[name, updateName] = useState("");
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");  

    let navigate = useNavigate();
  
      

    return(
        <>
        <div className="Container">
   <label htmlFor="name">Name</label>
        <input onChange={(event)=>{
         updateInputValue(event,updateName);
        }}value={name} id="name"></input>

        <label htmlFor="username">Email Id</label>
        <input onChange={(event)=>{
         updateInputValue(event,updateUsername);
        }}value={username} id="username"></input>

        <label htmlFor='password'>Password</label>
        <input onChange={(event) =>{
         updateInputValue (event,updatePassword);
        }}value={password} type="password"></input>
        <button onClick={() => {
            updateName("");
            updateUsername("");
            updatePassword("");
            
           
     
        }}>Reset</button>
        <button onClick={() => {
            let usersList =JSON.parse (localStorage.getItem(LS_SIGNUP_INFO));
            usersList = usersList === null ? [] : usersList;
            localStorage.setItem(LS_SIGNUP_INFO,JSON.stringify([...usersList, {
                name,
                username,
                password,}
                
        ])) 
        navigate("/login")  
    }
        
    }
        
        >Submit</button> 
        </div>
        
        
        </>
    )
    }
