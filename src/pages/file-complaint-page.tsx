import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { postComplaint } from "../api/complaint-requests";
import { ComplaintInputForm } from "../components/ComplaintForm";
import { Header } from "../components/header";
import { ComplaintForm } from "../types/types";
import "../css/GlobalStyling.css"


export function FileComplaintPage(){

    const navigate = useNavigate();

    const [complaintForm, setComplaintForm] = useState<ComplaintForm>({subject:"",description:"",meeting_id:-1,user_id:-1, status:"UNREVIEWED"});

    async function handleSubmit(){
        const complaint = {
            subject: complaintForm.subject,
            description: complaintForm.description,
            meeting_id: complaintForm.meeting_id,
            status: complaintForm.status,
            user_id: complaintForm.user_id
        }
        const submittedComplaint = await postComplaint(complaint);
        navigate("/")
    }


    return<>

    <div>
        <ComplaintInputForm complaintForm={complaintForm} setComplaintForm={setComplaintForm}/>
        <button className="buttons" onClick={handleSubmit}>Submit Complaint</button>
    </div>
    </>
}