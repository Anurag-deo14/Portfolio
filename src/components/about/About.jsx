import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
         <img src={ME} alt="Anurag"></img>
        </div>
        <div className='about__content'>
           
            <div className='about__cards'>
            <a href='https://www.codechef.com/users/topcoader_14' target='_blank'>
              <article className='about__card'>
              <SiCodechef className='about__icon'/>
                <h5>Codechef</h5>
                <small >3 Star Coder</small>
              </article>
              </a>
            <a href='https://codeforces.com/profile/001bestcoder' target='_blank'>

              <article className='about__card'>
              <SiCodeforces className='about__icon'/>
                <h5>Codeforces</h5>
                <small>100+ Problems</small>
              </article>
              </a>
            <a href='https://github.com/Anurag-deo14' target='_blank'>

              <article className='about__card'>
              <BsGithub className='about__icon'/>
                <h5>Github</h5>
                <small>25+ Projects</small>
              </article>
              </a>
            </div>
            <p>
            Myself Anurag Deo currently persuing btech in Electronics and Communication engineering from NIT Raipur. I am a fullstack developer and a competetive programming enthusiast and I am flexible to work with multiple tech stacks, I have also been placed at mock placement conducted NIT Raipur.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About