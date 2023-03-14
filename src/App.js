 import React from "react";
 import Calendar from "./component/Calendar";
 import {Route, Routes } from "react-router-dom";

 import SignIn from "./component/SignIn";
 import SignUp from "./component/SignUp";
import UserPage from "./component/UserPage";


function App() {
  return (
    <div className="App">
     <UserPage/>

      <Routes>
        <Route path="/Calendar" element={<Calendar/>}/>
        <Route path="/Sign_In" element={<SignIn/>}/>
        <Route path="/Sign_Up" element={<SignUp/>}/>
      </Routes>
    </div>

  );
}

export default App;
