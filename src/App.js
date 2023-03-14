 import React from "react";
 import Calendar from "./component/Calendar";
 import {Route, Routes } from "react-router-dom";

 import SignIn from "./component/SignIn";
 import SignUp from "./component/SignUp";
import UserPage from "./component/UserPage";
import UserInfo from "./component/UserInfo";


function App() {
  return (
    <div className="App">
    

      <Routes>
      <Route path="/" element={<UserPage/>}/>
        <Route path="/Calendar" element={<Calendar/>}/>
        <Route path="/Sign_In" element={<SignIn/>}/>
        <Route path="/Sign_Up" element={<SignUp/>}/>
        <Route path="/User_Info" element={<UserInfo/>}/>
        
      </Routes>
    </div>

  );
}

export default App;
