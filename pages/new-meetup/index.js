import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addMeetupHandler = (anyData) => {
    console.log(anyData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
