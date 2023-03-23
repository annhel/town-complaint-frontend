import { json } from "stream/consumers";
import { Complaint, ComplaintForm } from "../types/types";


const url = "http://127.0.0.1:8080";

export async function getAllComplaints():Promise<Complaint[]>{
    const httpResponse = await fetch(`${url}/complaints`)
    const showReviews: Complaint[] = await httpResponse.json();
    return showReviews;
}

export async function getComplaintById(id: number):Promise<Complaint>{
    const httpResponse = await fetch(`${url}/complaints/${id}`)
    const complaint: Complaint = await httpResponse.json();
    return complaint;
}

export async function postComplaint(complaintForm: ComplaintForm):Promise<Complaint>{
    const httpResponse = await fetch(`${url}/complaints`,
    {method:"POST",
    body: JSON.stringify(complaintForm),
    headers:{
        "Content-Type":"application/json"
    }});

    const complaint: Complaint = await httpResponse.json();
    return complaint;
}

export async function putComplaint(complaintForm: ComplaintForm):Promise<Complaint>{
    const httpResponse = await fetch(`${url}/complaints`,
    {method:"PUT",
    body: JSON.stringify(complaintForm),
    headers:{
        "Content-Type": "application/json"
    }});

    const complaint:Complaint = await httpResponse.json();
    return complaint;
}

export async function deleteComplaint(id: number): Promise<boolean>{
    const httpResponse = await fetch(`${url}/complaints/${id}`)
    const isDeleted: boolean = await httpResponse.json();
    return isDeleted;
}

export async function getByMeetingId(id: number): Promise<Complaint[]>{
    const httpResponse = await fetch(`${url}/complaints/${id}`)
    const complaints = await httpResponse.json();
    return complaints;
}

