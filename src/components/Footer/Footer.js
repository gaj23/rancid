import React from 'react';

import './Footer.css';
import ghLogo from './assets/github-logo-white.png';
import linkedInLogo from './assets/linkedin-logo-white.png';

const Footer = () => {


  return (
    <footer>
      <h3>About Us:</h3>
      <div>
        <section className='creator'>
            <h4>Gabrielle Joyce</h4>
            <a target='_blank' rel='noreferrer' href='https://github.com/gaj23'><img alt="Gabrielle's GitHub" src={ghLogo} /></a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gaj23/'><img alt="Gabrielle's LinkedIn" src={linkedInLogo} /></a>
        </section>

      <section className='creator'>
        <h4>Richard Tyler</h4>
        <article>
          <a target='_blank' rel='noreferrer' href='https://github.com/richardltyler'><img alt="Richard's GitHub" src={ghLogo} /></a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/richardltyler/'><img alt="Richard's LinkedIn" src={linkedInLogo} /></a>
          </article>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
