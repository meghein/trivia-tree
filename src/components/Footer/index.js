import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

export default function Footer() {

  return (
    <footer>
      <p className='name'>Made with {<FontAwesomeIcon icon={faHeart} />} by Meghan Hein</p>
      <div className='links'>
        <a href='mailto:meghan.hein@gmail.com'><FontAwesomeIcon icon={faEnvelope}/></a>
        <a href='https://github.com/meghein/tandem-quizzes' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
        <a href='https://www.linkedin.com/in/meghan-hein/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>
    </footer>
  )
}

{/* <p>Created by <a href='https://resume.creddle.io/resume/hq343p8820e' target='_blank' rel='noreferrer'>Meghan Hein</a></p> */}