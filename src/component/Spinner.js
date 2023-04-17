import React from 'react'
import Mygif from '../spinner.gif'


export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={Mygif} alt="" style={{width:"100px",height:"100px"}}/>
    </div>
  )
}

