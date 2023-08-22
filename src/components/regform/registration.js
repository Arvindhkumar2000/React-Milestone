import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { Link } from "react-router-dom";

export function Registration(){

    return(
<>
<div class="container ">
<div class="text-center">
    <form>
        
        <h2>Registration Form</h2>
<div class="form-group">
                <label for="username" class="mb-2">Username: </label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group mt-1">
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group mt-2">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group mt-2">
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" required/>
            </div>
            <div class="form-group mt-2">
                <label for="full_name">Full Name:</label>
                <input type="text" id="full_name" name="full_name" required/>
            </div>
            <div class="form-group mt-2">
                <label for="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" required/>
            </div>
            <div class="form-group mt-2">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" class=>Register</button>
        </form>

    </div>
    </div>
</>

    );

}