import React from "react";
import {Link,  useNavigate} from "react-router-dom"
import { LS_LOGGIN_INFO } from "../constants";

import "./Style.css";



    const Navbar1 = (props) => {
        const { isLoggeIn,user} = props;
       console.log(isLoggeIn,user)
        const navigate = useNavigate();



    function logOutUser() {
        localStorage.setItem(LS_LOGGIN_INFO,null);
        navigate("/login");

    }
    
    return (

       <div className="nav">
        <Link to="/signup"className="tital-bar">
        {" "} Ecart{" "}</Link>
       <div>
        <div>
            <Link to="/login">{isLoggeIn ? "" : "login"}</Link>
        </div>
        
       <div>
       <div>
       <Link to="/signup">{isLoggeIn ? "" : "Signup"}</Link>
       </div>
       </div>
       <div>
        <Link to="/username">{isLoggeIn ? user.username : ""}</Link>
        </div>
        </div>
       <div onClick={logOutUser}>{isLoggeIn ? "logout" : ""}</div>
       </div>
    );
    }
export default Navbar1;