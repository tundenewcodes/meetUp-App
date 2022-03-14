import React,{useContext} from 'react'
import classes from './MeetupItem.module.css'
import Card from '../../UI/Card'
import FavoriteContext from '../../store/favorite-context'

const MeetupItem = ({ img, id, address, title, description }) => {

   const favoritesCtx = useContext(FavoriteContext)
  
   const itemIsFavorite = favoritesCtx.isFavorite(id)
// const popUp = () => {
//   if (itemIsFavorite) {
//     console.log('hello fave')
//   } else {
//     console.log('true')
//   }
// }
  const toggleFavoriteStatusHandler = () =>{
     console.log(id)
     if (itemIsFavorite) {
       favoritesCtx.removeFavorite(id)
     } else {
       favoritesCtx.addFavorite({
         id: id,
         title: title,
         description: description,
         image: img,
         address: address,
       })
     }
   }
  return (
    <Card>
      <li key={id} className={classes.item}>
        <div className={classes.image}>
          <img src={img} alt={title} />
        </div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <address>{address}</address>
          <span>{description}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </li>
    </Card>
  )
}

export default MeetupItem