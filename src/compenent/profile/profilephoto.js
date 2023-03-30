import React from "react";
import image from './phprofile.png'

// This component renders a profile photo, using an image file imported from './phprofile.png'

const ProfilePhoto = () => {
  return (
    <div >
      {/* The img tag displays the imported image with custom width and height styles */}
      <img src={image} style={{width:260 , height: 280}} alt="Profile" />
    </div>
  );
};

export default ProfilePhoto;