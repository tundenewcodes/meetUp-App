import React, { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/meetupList'
import LoadingIndicator from '../UI/LoadingIndicator'
const AllMeetUp = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedData, setLoadedData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-meetup-81593-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setIsLoading(false)
        const meetUpData = []
        for (const key in data) {
          const meetup = {
            id: key,
            title : data[key].title,
            address : data[key].address,
            image : data[key].image,
            description : data[key].description,
          }
           meetUpData.push(meetup)
        }
       
        setLoadedData(meetUpData)
      })
  },[])
  
  if (isLoading) {
    return (
      <section>
        <LoadingIndicator/>
      </section>
    )
  }
  const meetUps = loadedData.map((meetup) => {
    return (
      <MeetupList
        img={meetup.image}
        address={meetup.address}
        title={meetup.title}
        id={meetup.id}
        description={meetup.description}
      />
    )
  })
  return (
    <section>
      <h1>All meetups</h1>
      {meetUps}
    </section>
  )
}

export default AllMeetUp
