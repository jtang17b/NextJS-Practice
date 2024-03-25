import MeetupList from "../components/meetups/MeetupList";

const MEETUPS_DATA = [
  {
    id: "M1",
    title: "A First Meetup",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "M2",
    title: "A Second Meetup",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "M3",
    title: "A third Meetup",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a third meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={MEETUPS_DATA}></MeetupList>;
};

export default HomePage;
