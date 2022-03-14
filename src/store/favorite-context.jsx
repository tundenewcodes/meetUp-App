import { createContext, useState } from 'react'

 const FavoriteContext = createContext({
  totalFavorite: 0,
    favorite: [],
    addFavorite: (m) => { },
    removeFavorite: (id) => { },
  isFavorite : (m)=>{ }
})

 export const FavoriteContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const addFavoritehandler = (meetupData) => {
    setFavorites((prevState) => {
      return prevState.concat(meetupData)
    })
  }

   const removeFavoriteHandler = (id) => {
     setFavorites((prevState) => {
       return prevState.filter((favorite) => favorite.id !== id)
     })
   }

   const isFavoriteHandler = (meetupId) => {
    return favorites.some(meetup => meetup.id === meetupId)
   } 
    
  const context = {
    favorite: favorites,
    totalFavorite: favorites.length,
    addFavorite: addFavoritehandler,
      removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler
  }
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  )
}
export default FavoriteContext
