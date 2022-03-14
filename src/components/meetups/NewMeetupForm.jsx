import React, { useRef } from 'react'
import Card from '../../UI/Card'
import classes from './NewMeetupForm.module.css'
import { useNavigate } from 'react-router'


const NewMeetupForm = (props) => {
  const navigate = useNavigate()
  const titleRef = useRef()
  const addressRef = useRef()
  const imageRef = useRef()
  const descriptionRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = titleRef.current.value
    const enteredAddress = addressRef.current.value
    const enteredImage = imageRef.current.value
    const enteredDescription = descriptionRef.current.value

    const meetUpData = {
      title: enteredTitle,
      address: enteredAddress,
      image: enteredImage,
      description: enteredDescription,
    }
    props.onAddForm(meetUpData)
    navigate('/')
  }
  return (
    <Card>
      <h2>new meetups</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>add title</label>
          <input type='text' required id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>add image url</label>
          <input type='url' required id='image' ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>add address</label>
          <input type='text' required id='address' ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>add description</label>
          <textarea
            ref={descriptionRef}
            name=''
            id='description'
            rows={5}
            required></textarea>
        </div>
        <div className={classes.actions}>
          <button>submit form</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
