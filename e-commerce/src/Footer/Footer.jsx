import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import "./Footer.scss"


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Left'>
            <h1>SARA.</h1>
            <p> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>
          <div className='SocialContainer'>
            <div className='SocialIcon' style={{backgroundColor:"#3B5999"}}>
                <Facebook />
            </div>
            <div className='SocialIcon' style={{backgroundColor:"#E4405F"}}>
                <Instagram />
            </div>
            <div className='SocialIcon' style={{backgroundColor:"#55ACEE"}}>
                <Twitter />
            </div>
            <div className='SocialIcon' style={{backgroundColor:"#E60023"}}>
                <Pinterest />
            </div>
          </div>
        </div>
        <div className='Center'>
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Man Fashion</li>
                <li>Woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className='Right'>
            <h3>Contact</h3>
            <div className='ContactItem'>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </div>
            <div className='ContactItem'>
                <Phone style={{marginRight:"10px"}}/> +91 8890124135
            </div>
            <div className='ContactItem'>
                <MailOutline style={{marginRight:"10px"}}/> goyalsaransh1804@gmail.com

            </div>
            <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt=''></img>
        </div>
    </div>
  )
}

export default Footer