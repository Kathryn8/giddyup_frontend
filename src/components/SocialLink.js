import React from 'react';

const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} target='_blank' rel="noopener noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
