import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

export default function Footer() {
  return (
    <footer>
      <p>Created with <FontAwesomeIcon icon={faHeart}/> <a href='https://resume.creddle.io/resume/hq343p8820e' target='_blank'>by Meghan Hein</a></p>
      <a href='https://github.com/meghein/tandem-quizzes' target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
      <a href='https://www.linkedin.com/in/meghan-hein/' target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
      
    </footer>
  )
}
