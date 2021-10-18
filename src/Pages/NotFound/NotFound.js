import React from "react";
import video from "./dribbble.mp4";

const NotFound = () => {
  return (
    <div>
      <video className="h-screen w-full"   loop autoPlay >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default NotFound;
