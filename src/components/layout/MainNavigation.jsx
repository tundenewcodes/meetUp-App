import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteContext from '../../store/favorite-context'
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
  const favoriteCtx = useContext(FavoriteContext)
  const totalFavorite = favoriteCtx.totalFavorite
    return (
      <header className={classes.header}>
        <div className={classes.logo}>REACT MEETUP APP</div>{' '}
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                style={({ isActive }) =>
                  isActive ? { color: 'white' } : { color: 'cyan' }
                }>
                All MeetUp
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new-meetup'
                style={({ isActive }) =>
                  isActive ? { color: 'white' } : { color: 'cyan' }
                }>
                New MeetUp
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/favorite-meetup'
                style={({ isActive }) =>
                  isActive ? { color: 'white' } : { color: 'cyan' }
                }>
                Favorite MeetUp{' '}
                <span className={classes.badge}>{totalFavorite}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default MainNavigation
