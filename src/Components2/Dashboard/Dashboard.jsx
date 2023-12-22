import React from 'react'
import Navbar from '../Navbar/Navbar'
import PermanentDrawerLeft from './Sidebar'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar />
      <PermanentDrawerLeft />
    </div>
  )
}

export default Dashboard
