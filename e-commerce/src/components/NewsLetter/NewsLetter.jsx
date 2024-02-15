import React from 'react'
import "./NewsLetter.scss"
import { Send } from '@mui/icons-material'


const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
    <h1>Newsletter</h1>
        <div className='Desc'>Get timely updates from your favorite products.</div>
        <div className='InputContainer'>
            <input placeholder='Your email'></input>
            <button><Send/></button>
        </div>

    </div>
  )
}

export default NewsLetter