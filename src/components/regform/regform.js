import React from "react";
import './regform.css';
import { Link } from "react-router-dom";

export function Register() {
    return (
        <>
           
            
            <div class="text-center">
            <h4>Want to check out this <br></br>file? Signup or Login</h4>
                <input type="email" placeholder="Email" class="mt-5"></input><br/>
                <input type="password" placeholder="Password" class="mt-2"></input><br/>
               <button class="mt-2 bg-secondary text-light fw-bold" onclick="login()">Create Account</button>
               <p>Not an Existing User? <Link to="./registration" ><span>Signup</span></Link> </p>
            </div>
              
           
            
            

        </>
    );
}