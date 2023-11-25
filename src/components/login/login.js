import {React,useState} from "react";
import {  useNavigate } from "react-router-dom";
import '../css/logIn.css';
import { usersList } from "../constants";
function LogIn(){
    const Navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showEmailError,setShowEmailError] = useState("");
    const [error,setError] = useState('')
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
        if( /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(event.target.value)) {
            setShowEmailError(false)
       
        } else {
            setShowEmailError(true)    
        }
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length < 8) {
            setError('Password must be at least 8 characters long');
          } else {
            setError('');
          }
        }

    

    const handleLogIn = () => {
        if(!email || !password){
            alert('Please enter a valid email & password')
            return false
        }

        const obj = {
            email,
            password
        }
        const userFound = usersList.filter(item => JSON.stringify(item) === JSON.stringify(obj));

        if(userFound?.length !== 1) {
            alert('Please login with register user')
            return false
        }

        setEmail("");
        setPassword("");
        Navigate('/Portfolio');

    }
        return(
    <div className="main">
         
          <h2 >LOGIN </h2>
        <div>
         <label className="labelEmail">EMAIL</label>
         <input className="inputClass"type = "text" value={email} onChange={handleChangeEmail}/>
         {showEmailError && <p>PLEASE ENTER A VALID EMAIL</p>}
        </div>
        <div>
            <label className="labelClass">PASSWORD</label>
            <input className="inputClass"  type = "password" value = {password} onChange={handleChangePassword} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div>
            <button className="button" onClick={handleLogIn}>LOGIN</button>


        </div>
        
         
    </div>
    )
        
}
    


export default LogIn;