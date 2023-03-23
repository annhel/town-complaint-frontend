import { Meeting, MeetingForm } from "../types/types";

const url = "http://127.0.0.1:8080";

export async function getAllMeetings(): Promise<Meeting[]>{
    const httpResponse = await fetch(`${url}/meetings`)
    const meetings: Meeting[] = await httpResponse.json();
    return meetings;
}

export async function getMeetingById(id: number): Promise<Meeting>{
    const httpResponse = await fetch(`${url}/meetings/${id}`)
    const meeting: Meeting = await httpResponse.json();
    return meeting;
}

export async function postMeeting(meetingForm: MeetingForm): Promise<Meeting>{
    const httpResponse = await fetch(`${url}/meetings`,{
        method: "POST",
        body: JSON.stringify(meetingForm),
        headers:{
            "Content-Type":"application/json"
        }})
    const meeting:Meeting = await httpResponse.json();
    return meeting;
}

export type SpeakerInfo = {
    user_id: number
    fname: string
    lname: string
}

export async function postMeetingSpeaker(user_id: number, meeting_id: number): Promise<SpeakerInfo>{
    const httpResponse = await fetch(`${url}/meetings/${meeting_id}/speakers/${user_id}`,{
        method: "PATCH",
        headers:{
            "Content-Type":"application/json"
        }})
    const speakerInfo: SpeakerInfo = await httpResponse.json();
    return speakerInfo;
}

export async function getSpeakersByMeetingId(meeting_id: number): Promise<SpeakerInfo[]>{
    const httpResponse = await fetch(`${url}/speakers/${meeting_id}`)
    const speakers: SpeakerInfo[] = await httpResponse.json();
    return speakers;
}