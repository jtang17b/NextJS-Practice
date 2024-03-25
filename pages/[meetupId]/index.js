import MeetupDetail from "../../components/meetups/MeetupDetail";
import React from "react";

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        image="https://www.w3schools.com/w3css/img_lights.jpg"
        title="A First Meetup"
        address="Some Street 5, Some City"
        description="The meetup description"
      />
    </>
  );
};

export default MeetupDetails;
