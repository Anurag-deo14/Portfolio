import React from 'react'
import './education.css'
import IMG from '../../assets/NIT.jpeg'
import IMG1 from '../../assets/NDA.png'
import IMG2 from '../../assets/DAV.png'
import {Pagination,Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
;


const Education = () => {
  return (
    <section id='education'>
    <h5>Academics & Accomplishments</h5>
    <h2>Education</h2>
    <Swiper className='aboute__cards'   modules={[Pagination,Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true} autoplay_speed={3500}>
              <SwiperSlide className='about__card'>
              <div className='education__item-imager'>
                 <img src={IMG} alt='' />
              </div>
                <h5>Btech(ECE)</h5>
                <small>Nit Raipur 2025</small>
                <p>CPI : 8.54</p>
              </SwiperSlide>
              <SwiperSlide className='about__card'>
              <div className='education__item-imagen'>
                 <img src={IMG1} alt='' />
              </div>
              <h5>NDA(Recomended)</h5>
                <small >Indian Navy 2020</small>
                <p>AIR : 431</p>
              </SwiperSlide>
              <SwiperSlide className='about__card'>
              <div className='education__item-image'>
                 <img src={IMG2} alt='' />
              </div>
              <h5>AISSCE(12th)</h5>
                <small >DAV Bishrampur 2020</small>
                <p>Percentage : 94.2%</p>
              </SwiperSlide>
              <SwiperSlide className='about__card'>
              <div className='education__item-image'>
                 <img src={IMG2} alt='' />
              </div>
              <h5>AISSE(10th)</h5>
                <small >DAV Bishrampur 2018</small>
                <p>Percentage : 97.6%</p>
              </SwiperSlide>
            </Swiper>
    </section>
  )
}

export default Education