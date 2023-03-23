import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMeeting } from "../api/meeting-requests";
import { MeetingInputForm } from "../components/MeetingForm";
import { MeetingForm } from "../types/types";


export function ScheduleMeetingPage(){

    const navigate = useNavigate();

    const [meetingForm, setMeetingForm] = useState<MeetingForm>({title:"", description:"", address:"", meeting_link:"", date:0})

    async function handleScheduleMeeting(){
        const meeting:MeetingForm = {
            title: meetingForm.title,
            description: meetingForm.description,
            address: meetingForm.address,
            meeting_link: meetingForm.meeting_link,
            date: meetingForm.date
        }
        const scheduledMeeting = await postMeeting(meeting);
        navigate("/")
    }



    return<>
        <MeetingInputForm meetingForm={meetingForm} setMeetingForm={setMeetingForm}></MeetingInputForm>
        <button onClick={handleScheduleMeeting}>Schedule Meeting</button>
    </>
}