import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio4.png'
import IMG3 from '../../assets/portfolio2.png'
import IMG4 from '../../assets/portfolio3.png'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG} alt='' />
        </div>
          <h3>EdTech site(Javascript)</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Anurag-deo14/GREEDY' target='_blank' className='btn'>Github</a>
          <a href='https://dbugger.co.in' target='_blank' className='btn btn-primary'>Live Website</a>
          </div>
          </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG3} alt='' />
        </div>
          <h3>Tic-Tac-Toe(ReactJS)</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Anurag-deo14/Tic-Tac-Toe-' target='_blank' className='btn'>Github</a>
          <a href='https://cheerful-arithmetic-9f9a2d.netlify.app/' target='_blank' className='btn btn-primary'>Live Website</a>
          </div>
          </article>
          <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG4} alt='' />
        </div>
          <h3>Music Player(Javascript)</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Anurag-deo14/Music-Player' target='_blank' className='btn'>Github</a>
          <a href='https://anurag-deo14.github.io/Music-Player/' target='_blank' className='btn btn-primary'>Live Website</a>
           </div>
          </article>
          <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG2} alt='' />
        </div>
          <h3>Wikipedia(wikipedia api)</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Anurag-deo14/Wikipedia' target='_blank' className='btn'>Github</a>
          <a href='https://anurag-deo14.github.io/Wikipedia/' target='_blank' className='btn btn-primary'>Live Website</a>
           </div>
          </article>
      
    
      
        </div>
    </section>
  )
}

export default Portfolio