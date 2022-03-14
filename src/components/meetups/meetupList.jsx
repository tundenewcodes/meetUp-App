import React from 'react'
import MeetupItem from './meetupItem'
import classes from './MeetupList.module.css'
const meetupList = ({ img, id, address, title, description }) => {
  return (
    <ul className = {classes.list}>
      <MeetupItem
        id={id}
        img={img}
        address={address}
        title={title}
        description={description}
      />
    </ul>
  )
}

export default meetupList
