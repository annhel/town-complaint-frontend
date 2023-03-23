import { useEffect, useState } from "react"
import { getAllMeetings } from "../api/meeting-requests"
import { ComplaintForm, Meeting } from "../types/types"
import "../css/FileComplaint.css"


type ComplaintFormProps = {
    complaintForm: ComplaintForm
    setComplaintForm:React.Dispatch<React.SetStateAction<ComplaintForm>>
}

export function ComplaintInputForm(props: ComplaintFormProps){
    
    return<>
        <div id="complaint-form-div">
            <h3>Submit a Complaint:</h3>
            <input id="complaint-subject" type={"text"} placeholder="Subject..." onChange={e=> props.setComplaintForm({...props.complaintForm, subject: e.target.value})}></input>
            <textarea id="complaint-desc" placeholder="Enter complaint here..." onChange={e=> props.setComplaintForm({...props.complaintForm, description: e.target.value})}></textarea>
        </div>
    </>
}