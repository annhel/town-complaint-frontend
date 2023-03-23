import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { FileComplaintPage } from './pages/file-complaint-page';
import { HomePage } from './pages/home-page';
import { ManageComplaintsPage } from './pages/ManageComplaints';
import { MeetingDetailsPage } from './pages/MeetingDetails';
import { ScheduleMeetingPage } from './pages/schedule-meeting-page';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ViewMeetingsPage } from './pages/ViewMeetingsPage';



function App() {
  const [role, setRole] = useState<string>("");
  return (
    <BrowserRouter>
    <Header role={role} setRole={setRole}></Header>
      <Routes>
        <Route path='/' element={<HomePage role={role}/>}/>
        <Route path='/filecomplaint' element={<FileComplaintPage/>}/>
        <Route path='/schedulemeeting' element={<ScheduleMeetingPage/>}/>
        <Route path='/meetingdetails/:meeting_id' element={<MeetingDetailsPage role={role}/>}/>
        <Route path='/signin' element={<SignInPage setRole={setRole}/>}/>
        <Route path='/requestaccount' element={<SignUpPage/>}/>
        <Route path='/viewmeetings' element={<ViewMeetingsPage/>}/>
        <Route path='managecomplaints' element={<ManageComplaintsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
