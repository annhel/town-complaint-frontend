import { useEffect, useState } from "react";
import { getAllComplaints, putComplaint } from "../api/complaint-requests";
import { getAllMeetings } from "../api/meeting-requests";
import { Complaint, Meeting } from "../types/types"

type UpdatedComplaint = {
    meeting_id: number
    status: string
}

export function ManageComplaintsPage(){

    const [complaints, setComplaints] = useState<Complaint[]>([]);
    const [meetings, setMeetings] = useState<Meeting[]>([]);
    const [fields, setFields] = useState<UpdatedComplaint>({status:"", meeting_id: 0})

    useEffect(()=>{
        (async ()=>{
            const retrievedComplaints: Complaint[] = await getAllComplaints();
            // if(!retrievedMeetings) setMeetingsExist(true);
            setComplaints(retrievedComplaints);
            const retrievedMeetings = await getAllMeetings();
            setMeetings(retrievedMeetings);
        })();
    }, [handleChanges])

    async function handleChanges(c: Complaint){
        const updatedComplaint:Complaint = {
            complaint_id: c.complaint_id,
            subject: c.subject,
            description: c.description,
            user_id: c.user_id,
            meeting_id: fields.meeting_id,
            status: fields.status
        }
        await putComplaint(updatedComplaint);
    }

    return<>
    <div>
        {complaints.map(c=>
        <div>
            <div key={c.complaint_id}>
                <p>{c.subject}          <span>{c.status}</span></p>
                <p>{c.description}</p>
            </div>
            <div>
                <label>Priority Level: </label>
                <select onChange={e => setFields({...fields, status: e.target.value}) }>
                    <option value={"UNRESOLVED"}>Unresolved</option>
                    <option value={"HIGH PRIORITY"}>High Priority</option>
                    <option value={"LOW PRIORITY"}>Low Priority</option>
                    <option value={"IGNORED"}>Ignored</option>
                </select>
            </div>
            <div>
                <label>Select a meeting to address the complaint: </label>
                <select placeholder={String(c.meeting_id)} onChange={e => setFields({...fields, meeting_id: Number(e.target.value)}) }>
                    <option value={-1} >Unassigned</option>
                    {meetings.map(m=>
                        <option key={m.meeting_id} value={m.meeting_id}>{m.title}</option>
                        )}
                </select>
            </div>
            <button onClick={()=>handleChanges(c)}>Submit Changes</button>
        </div>
            )}
        </div>

    </>
}