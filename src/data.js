
import tour1 from './assets/images/tour-1.jpeg';
import tour2 from './assets/images/tour-2.jpeg';
import tour3 from './assets/images/tour-3.jpeg';
import tour4 from './assets/images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
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

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
];
