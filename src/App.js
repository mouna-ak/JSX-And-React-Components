 
import React from "react";
import "./App.css"
import ProfilePhoto from "./compenent/profile/profilephoto";
import FullName from "./compenent/profile/fullname";
import Address from "./compenent/profile/adress";

// This component represents the main application

const App = () => {
  return (
    <div className="container">

      <ProfilePhoto className="flex"/>
      <div className="flex">
      <FullName />
      <Address />
      </div>
      
    </div>
  );
};

export default App;
