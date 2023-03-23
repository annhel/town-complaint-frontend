import { LoginRequest } from "../types/types"
import "../css/login.css"

export type SignInPageProps = {
    signInForm: LoginRequest,
    setSignInForm: React.Dispatch<React.SetStateAction<LoginRequest>>
}

export function SignInInputForm(props: SignInPageProps){

    return<>
    <div >
        <form id="login-div">
            <label htmlFor="username">Username: </label>
            <input id="login-input" type="text" onChange={e=> props.setSignInForm({...props.signInForm, username: e.target.value})}/>
            <label htmlFor="password">Password: </label>
            <input id="login-input" type="text" onChange={e=> props.setSignInForm({...props.signInForm, password: e.target.value})}/>
        </form>
    </div>
    </>
}