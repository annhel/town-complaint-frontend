import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/user-requests";
import { SignInInputForm } from "../components/SignInInputForm";
import { LoginRequest, UserDetails } from "../types/types";
import "../css/GlobalStyling.css"
import "../css/login.css"

type RoleProps = {
    setRole: React.Dispatch<React.SetStateAction<string>>
}

export function SignInPage(props: RoleProps){

    const navigate = useNavigate();

    const [signInForm, setSignInForm] = useState<LoginRequest>({username:"", password:""});
    const [permission, setPermission] = useState<boolean>(true);

    async function handleSignIn(){
        const userInfo: UserDetails  = await loginRequest(signInForm)
        localStorage.setItem("user_id", String(userInfo.user_id))
        localStorage.setItem("username", userInfo.username)
        localStorage.setItem("fname", userInfo.fname)
        localStorage.setItem("lname", userInfo.lname)
        localStorage.setItem("role", userInfo.role)
        props.setRole(userInfo.role)
        navigate('/')
    }

    return<>
    <div id="login-container">
        <SignInInputForm signInForm={signInForm} setSignInForm={setSignInForm}/>
        <button className="buttons" onClick={handleSignIn}>Sign In</button>
        <br />
        <button id="register-button" className="buttons" onClick={()=> navigate('/requestaccount')}>Request to Register</button>
    </div>
    </>
}