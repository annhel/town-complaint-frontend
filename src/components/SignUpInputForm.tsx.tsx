import { UserInfo } from "../types/types"

export type SignUpPageProps = {
    signUpForm: UserInfo,
    setSignUpForm: React.Dispatch<React.SetStateAction<UserInfo>>
}

export function SignUpInputForm(props: SignUpPageProps){

    return<>
    <div >
        <form id="registration-div">
            <label htmlFor="username">Username: </label>
            <input id="login-input" type="text"  onChange={e=> props.setSignUpForm({...props.signUpForm, username: e.target.value})}/>
            <label htmlFor="password">Password: </label>
            <input id="login-input" type="text" onChange={e=> props.setSignUpForm({...props.signUpForm, password: e.target.value})}/>
            <label htmlFor="fname">First Name: </label>
            <input id="login-input" type="text" onChange={e=> props.setSignUpForm({...props.signUpForm, fname: e.target.value})}/>
            <label htmlFor="lname">Last Name: </label>
            <input id="login-input" type="text" onChange={e=> props.setSignUpForm({...props.signUpForm, lname: e.target.value})}/>
        </form>
    </div>
    </>
}