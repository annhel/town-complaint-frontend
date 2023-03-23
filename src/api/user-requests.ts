import { LoginRequest, UserDetails, UserInfo } from "../types/types";


const url: string = 'http://127.0.0.1:8080';

export async function loginRequest(loginRequest: LoginRequest):Promise<UserDetails>{
    const httpRequest = await fetch(`${url}/login`,{
    method:"PATCH",
    body: JSON.stringify(loginRequest),
    headers:{
    "Content-Type":"application/json"
    }});

    const userInfo:UserDetails = await httpRequest.json();
    return userInfo;
}

export async function newUserRequest(userInfoForm: UserInfo):Promise<UserInfo>{
    const httpRequest = await fetch(`${url}/login`,{
    method:"PATCH",
    body: JSON.stringify(userInfoForm),
    headers:{
    "Content-Type":"application/json"
    }});

    const userInfo:UserInfo = await httpRequest.json();
    return userInfo;
}