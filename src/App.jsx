import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllMeetUp from './pages/AllMeetUp'
import NewMeetUp from './pages/NewMeetUp'
import FavoriteMeetUp from './pages/FavoriteMeetUp'
import Layout from './Layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUp />} />
        <Route path='/new-meetup' element={<NewMeetUp />} />
        <Route path='/favorite-meetup' element={<FavoriteMeetUp />} />
      </Routes>
    </Layout>
  )
  
  
}

export default App
