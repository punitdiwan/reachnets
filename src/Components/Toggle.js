import React, { useState } from 'react'
import '../App.css'

const Toggle = () => {
    const [show, setShow] = useState(true)
  return (
    <>
    <button className='my-btn' onClick={()=>setShow(!show)}>Click</button>
    {show ? <div className='sidebar'>sdjsadsahjkksdj</div> : ''}
    </>
  )
}

export default Toggle