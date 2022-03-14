import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
const NewMeetUp = () => {
  const addFormHandler = (meetUpData) => {
    fetch('https://react-meetup-81593-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetUpData),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }
  return (
    <section>
      <h1>Add new meetups here</h1>
      <NewMeetupForm onAddForm = {addFormHandler}/>
    </section>
  )
}

export default NewMeetUp
