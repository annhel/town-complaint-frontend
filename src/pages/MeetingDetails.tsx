import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getMeetingById, getSpeakersByMeetingId, postMeetingSpeaker, SpeakerInfo } from "../api/meeting-requests";
import { Complaint, Meeting } from "../types/types";
import "../css/Meetings.css"
import { getByMeetingId } from "../api/complaint-requests";

type RoleState = {
    role: string
}

export function MeetingDetailsPage(props: RoleState){

    const params = Number(useParams().meeting_id);

    const navigate = useNavigate();

    const [meetingDetails, setMeetingDetails] = useState<Meeting>({meeting_id:0, title:"", description:"", meeting_link:"", address:"", date: 0});
    const [speakers, setSpeakers] = useState<SpeakerInfo[]>([])
    const [complaints, setComplaints] = useState<Complaint[]>([])

    useEffect(()=>{
        (async ()=>{
            const retrievedMeeting = await getMeetingById(params);
            setMeetingDetails(retrievedMeeting);
            const relatedComplaints = await getByMeetingId(params);
            setComplaints(relatedComplaints);
            const relatedSpeaker = await getSpeakersByMeetingId(params);
            setSpeakers(relatedSpeaker)
        })();
    }, [speakers])

    async function handleRequest(){
        const user_id = Number(localStorage.getItem("user_id"))
        const result = await postMeetingSpeaker(user_id, params)
        console.log(result)
    }

    let formattedDate = ""
    if((meetingDetails?.date) !== undefined){
        const date = new Date(meetingDetails?.date * 1000);
        const monthAbbrev = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });
        formattedDate = `${monthAbbrev} ${day}, ${time}`;
    }

    return<>
    <div id="meeting-details-container">
        <div className="details-div">
            <p id="meeting-title">{meetingDetails.title}</p>
            <p className="meeting-details"><span className="label">Scheduled for: </span>{formattedDate}</p>
        </div>
        <div className="details-div">
            <p className="label">Meeting Details:</p>
            <p className="meeting-details">{meetingDetails.description}</p>
        </div>
        <div className="details-div">
            <p className="label">Meeting Location:</p>
            <p className="meeting-details">{meetingDetails.address}</p>
            <p className="meeting-details">{meetingDetails.meeting_link}</p>
        </div>
        <div className="details-div">
            {props.role === "CONSTITUENT" &&
            <button className="buttons" onClick={handleRequest}>Request to Speak</button> }
        </div>
    </div>
    <div>
        <div id="speakers">
            <h1>Speakers</h1>
            {speakers.map(s=>
                <p key={s.user_id}>{s.fname} {s.lname}</p>
                )}
        </div>
        <div id="complaints">
            <h1>Complaints</h1>
            {complaints.map(c=>
                <p key={c.complaint_id}>{c.subject}</p>
                )}
        </div>
    </div>
    </>
}