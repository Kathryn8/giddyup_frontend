import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';


const Cocktail = () => {

  return (

    <Wrapper>
      <div styles={{ minHeight: '600px' }}>test</div>
      <h1>hi htere</h1>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
      </header>
      <h1>COCKTAILS!</h1>
    </Wrapper>
  );
};
export default Cocktail;
