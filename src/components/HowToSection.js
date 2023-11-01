// import { services } from '../data'
import Title from './Title'
import HowTo from './HowTo'
import React from 'react';

const HowToList = [
  {
    id: 1,
    icon: '1',
    title: 'Sign up',
    text: "No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
  },
  {
    id: 2,
    icon: '2',
    title: 'Log into your dashboard',
    text: "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform.",
  },
  {
    id: 3,
    icon: '3',
    title: 'Scroll, click and go!',
    text: "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
  },
];

const HowToSection = () => {
  return (
    <section className='section services' id='services'>
      <Title title='how to' subTitle='get galloping' />

      <div className='section-center services-center'>
        {HowToList.map((item) => {
          return <HowTo {...item} key={item.id} />
        })}
      </div>
    </section>
  )
}
export default HowToSection
