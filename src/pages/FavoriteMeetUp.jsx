import React, { useContext } from 'react'
import FavoriteContext from '../store/favorite-context'
import MeetupList from '../components/meetups/meetupList'

const FavoriteMeetUp = () => {
  const favoriteCtx = useContext(FavoriteContext)
  const favData = favoriteCtx.favorite
  const meetUpData = favData.map((meetup) => {
    return (
      <MeetupList
        id={meetup.id}
        img={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
    )
  })

  let content 
  const totalFavorite = favoriteCtx.totalFavorite
  if (totalFavorite === 0) {
    content = <p>you have no favorite yet! you can start adding some</p>
  } else {
    content = meetUpData
  }
  return (
    <div>
      <h2>my favorite meetups</h2>
      {content}
    </div>
  )
}

export default FavoriteMeetUp
