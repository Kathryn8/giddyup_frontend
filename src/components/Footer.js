import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
import React from 'react';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; GiddyUP! Carpool App
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
export default Footer
