import { MeetingForm } from "../types/types"

type MeetingPageProps = {
    setMeetingForm: React.Dispatch<React.SetStateAction<MeetingForm>>
    meetingForm: MeetingForm
}

export function MeetingInputForm(props: MeetingPageProps){

    return<>
    <div>
        <div>
            <input type="datetime-local" onChange={e=> props.setMeetingForm({...props.meetingForm, date: new Date(e.target.value).getTime()/1000})}></input>
        </div>
        <div>
            <input type={"text"} placeholder="Title..." onChange={e=> props.setMeetingForm({...props.meetingForm, title: e.target.value})}></input>
            <textarea placeholder="Meeting details..." onChange={e=> props.setMeetingForm({...props.meetingForm, description: e.target.value})}></textarea>
        </div>
    </div>
    <div>
        <input type={"text"} placeholder="Meeting Address" onChange={e=> props.setMeetingForm({...props.meetingForm, address: e.target.value})}></input>
        <input type={"text"} placeholder="Virtual Meeting Link" onChange={e=> props.setMeetingForm({...props.meetingForm, meeting_link: e.target.value})}></input>
    </div>
    </>
}