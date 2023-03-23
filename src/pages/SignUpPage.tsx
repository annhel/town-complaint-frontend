import { useState } from "react";
import { newUserRequest } from "../api/user-requests";
import { SignUpInputForm } from "../components/SignUpInputForm.tsx";
import { UserInfo } from "../types/types";


export function SignUpPage(){

    const [signUpForm, setSignUpForm] = useState<UserInfo>({username:"", password:"", fname:"", lname:"", role:"CONSTITUENT"});

    async function handleSubmit(){
        const signUpInfo: UserInfo = {
            username: signUpForm.username,
            password: signUpForm.password,
            fname: signUpForm.fname,
            lname: signUpForm.lname,
            role: signUpForm.role
        }

        const newUser: UserInfo = await newUserRequest(signUpInfo);

    }

    return<>
    <div id="login-container">
        <SignUpInputForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
        <button id="submit-button" className="buttons" onClick={handleSubmit}>Submit Request</button>
    </div>
    </>
}