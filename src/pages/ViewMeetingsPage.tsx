import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMeetings } from "../api/meeting-requests";
import { Meeting } from "../types/types";


export function ViewMeetingsPage(){
    const [meetings, setMeetings] = useState<Meeting[]>([]);
    const [meetingsExist, setMeetingsExist] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(()=>{
        (async ()=>{
            const retrievedMeetings: Meeting[] = await getAllMeetings();
            // if(!retrievedMeetings) setMeetingsExist(true);
            setMeetings(retrievedMeetings);
            console.log(retrievedMeetings)
        })();
    }, [])

    function handleDetails(id: number){
        navigate(`/meetingdetails/${id}`)
    }

    return<>
     <div>
            <h3>Meetings</h3>
        </div>
        {/* <div>
            {!meetingsExist && (
                <h1>No Meetings have been scheduled. Check back soon!</h1>
            )}
        </div> */}
        <div>

        {meetings.map(m=>
            <div key={m.meeting_id} id="meeting-preview-div">
                <div id="meeting-title">
                    <p>{m.title}</p>
                    <p>{m.date}</p>
                </div>
                <div>
                    <button onClick={()=>handleDetails(m.meeting_id)}>Details</button>
                </div>
                
            </div>
            )}
        </div>
    </>
}