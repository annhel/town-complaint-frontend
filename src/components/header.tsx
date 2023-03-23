import { Navbar } from "../navbar/Navbar";
import { UserProps } from "../pages/home-page";
import "../css/header.css"

export type RoleProps = {
    setRole: React.Dispatch<React.SetStateAction<string>>,
    role: string
}

export function Header(props: RoleProps){

    return<>
    <div className="header">
        <div id="header-title">
            <h1 >The Iron Throne's Council</h1>
        </div>
        <div id="header-nav">
            <Navbar role={props.role} setRole={props.setRole}></Navbar>
        </div>
    </div>
    </>
}