import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMeetings } from "../api/meeting-requests";
import { Navbar } from "../navbar/Navbar";
import { Meeting } from "../types/types";
import KingsLanding from "../images/MidjourneyKL1.png"
import FamilyCrest from "../images/LannisterCrest.jpg"

import "../css/header.css"
import "../css/home.css"
import { Header } from "../components/header";

export type UserProps = {
    role: string
}

export function HomePage(props: UserProps){

    const navigate = useNavigate();

    

    return<>
    <div className="city-div">
        <p id="opening-statement">Attention all citizens of King's Landing! 
            Welcome to our official web app for filing complaints to your 
            esteemed council. As the seat of the Iron Throne, we understand the 
            weight of your concerns and grievances. Rest assured that your voices 
            will be heard, and your complaints will be addressed with utmost care and 
            attention.</p>
        <img className="kings-landing" src="https://i.pinimg.com/originals/2c/b3/df/2cb3df1e6b5675ec44322e5b7bb1fba1.gif" alt="King's Landing"></img>
    </div>
        
        <div>
            <h3>Meet your Council Members!</h3>
        </div>
        <div>
            <p>Map members bio here...</p>
        </div>
        
    </>
}