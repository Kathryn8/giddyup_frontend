import { services } from '../data'
import Title from './Title'
import Service from './Service'
import React from 'react';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='how to' subTitle='get galloping' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}
export default Services
