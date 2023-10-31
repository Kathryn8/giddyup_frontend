import { useState } from 'react';
import axios from 'axios';

const id = "65390320d38a33854c3edc85";
const url = `http://127.0.0.1:5000/api/v1/trips/${id}`;
// Accept : 'application/json'

const SearchAllTrips = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(data)
      setJoke(data.trips);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random jokes
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default SearchAllTrips;