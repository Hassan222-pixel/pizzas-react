import React from 'react'
import InstagramIcom from "@mui/icons-material/Instagram"
import FacebookIcom from "@mui/icons-material/Twitter"
import TwitterIcom from "@mui/icons-material/Facebook"
import LinkedInIcom from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcom /> <FacebookIcom /> <TwitterIcom /> <LinkedInIcom />   
        </div>
        <p>&copy; 2024 hassanawadk123@gmial.com</p>
    </div>
  )
}

export default Footer