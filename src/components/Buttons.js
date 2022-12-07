import React from 'react'
import Button from './Button'

function Buttons() {
  return (
    <div className='buttons--container'>
      <Button position={true}/>
      <Button position={true} icon = {<i class="fa fa-envelope fa--sides--color"></i>}/>
      <Button position={false} icon = {<i class="fa fa-envelope fa--sides--color"></i>}/>

    </div>
  )
}

export default Buttons
