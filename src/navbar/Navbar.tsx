import { useNavigate } from "react-router-dom";
import { Meeting } from "../types/types";
import "../css/navbar.css"
import { useEffect, useState } from "react";
import { RoleProps } from "../components/header";


export function Navbar(props:RoleProps){
    const navigate = useNavigate();

    function handleSignOut(){
        localStorage.clear()
        props.setRole("");
        navigate('/')
    }

    return<>
    <div className="primary-navigation">
        <button className="nav-button" onClick={()=> navigate('/')}>Home</button>
        <button className="nav-button" onClick={()=> navigate('/viewmeetings')}>View All Meetings</button>

        {props.role !== "COUNCIL" &&
        <button className="nav-button" onClick={()=> navigate('/filecomplaint')}>File Complaint</button>
        }
        
        {props.role === "COUNCIL" && <>
        <button className="nav-button" onClick={() => navigate('/managecomplaints')}>Manage Complaints</button>
        <button className="nav-button" onClick={() => navigate('/schedulemeeting')}>New Meeting</button> </>
        }

        {props.role.length === 0 &&
        <button className="nav-button" onClick={()=> navigate('/signin')}>Sign-in</button>
        }

        {props.role.length > 0 && 
        <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
        }
        <p>{props.role}</p>

    </div>
    </>
}