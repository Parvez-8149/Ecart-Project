import { useState } from "react"
import { useNavigate } from "react-router-dom";


import { LS_LOGGIN_INFO, LS_SIGNUP_INFO } from "../constants";
import { passwordValidation } from "../utills/validation";
import updateInputValue from "../utills/general";
import "./Style.css"

 
export default function LoginForm(props) {
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const [validationError,setValidationError]=useState(null);
    const navigation = useNavigate();

    function  login()  {
        const validationResult = passwordValidation(password)
        if(validationResult.result === false) {
            setValidationError(validationResult.massage);
            return;
        }
        const userList = JSON.parse(localStorage.getItem(LS_SIGNUP_INFO)) || [];
        const result = userList.find((user) => user.username === username && user.password === password);
      
        if (result) {

            localStorage.setItem(LS_LOGGIN_INFO, JSON.stringify(result));
            navigation("./login");

         } else {
            setValidationError("user not found");

         }
           } 
    function reset() {
        updateUsername("");
        updatePassword("");
    }

        return (
        <>
            <div className="Container">
            <p>{validationError}</p>
            <label htmlFor="username">Email Id</label>
            <input onChange={(event) => {
                updateInputValue(event, updateUsername)
            
            } } value={username} id="username">
                </input><label htmlFor='password'>Password</label>
                <input onChange={(event) => {
             updateInputValue(event, updatePassword,passwordValidation);

            } } 
            value={password} type="password"></input>
            
            <button onClick={reset}> Reset</button>
            <button onClick={login}>Submit</button>
            </div>
            </>
        )}