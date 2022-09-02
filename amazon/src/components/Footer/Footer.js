import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon/> <YouTubeIcon/> <InstagramIcon/> <FacebookIcon/> <TwitterIcon/>
            </div>
        </div>
    </footer>
  )
}

export default Footer