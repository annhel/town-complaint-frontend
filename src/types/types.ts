
export type Complaint = {
    complaint_id: number
    subject: string
    description: string
    user_id: number
    meeting_id: number
    status: string
}

export type ComplaintForm = {
    subject: string
    description: string
    user_id: number
    meeting_id: number
    status: string
}

export type Meeting = {
    meeting_id: number
    title: string
    description: string
    address: string
    meeting_link: string
    date: number
}

export type MeetingForm = {
    title: string
    description: string
    address: string
    meeting_link: string
    date: number
}

export type LoginRequest = {
    username: string
    password: string
}

export type UserDetails = {
    user_id: number
    username: string
    fname: string
    lname: string
    role: string
}

export type UserInfo = {
    username: string
    password: string
    fname: string
    lname: string
    role: string
}
