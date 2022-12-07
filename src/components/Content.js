import React from 'react'
import BusinessCard from './BusinessCard'
import dataProfile from '../dataProfile'
function Content() {
  const profiles = dataProfile.person.map(profile =>{
    return(
      <BusinessCard key={profile.id} profile={profile} />
    )
  })
  return (
    <div className='content--container'>
      {profiles}
    </div>
  )
}

export default Content
