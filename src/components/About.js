import aboutImg from '../assets/images/stats.png';
import Title from './Title';
import React from 'react';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='the' subTitle='stats' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>did you know?</h3>
          <p>
            With 35 kilometers daily commute, 0.12 Euro cents per kilometer in fuel costs and 120 grams in CO2 emissions on average, Carployee manages significant savings in all directions.
          </p>
          <p>
            For employees and companies.
          </p>
          <a href='https://www.carployee.com/mobility-trends-of-the-young-and-the-old-a-challenge-for-companies/?lang=en' arget="_blank" rel="noopener noreferrer" className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
