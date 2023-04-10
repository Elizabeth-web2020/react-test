import React from 'react';
import { WelcomePageStyled } from './WelcomePageStyled.style';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const WelcomePage = () => {
  return (
    <WelcomePageStyled>
      <div className='go-button-wrapper'>
      <Link to="/">
        <button className='go-button'>Go <AiOutlineRight /></button>
      </Link>
      </div>
      <h1 className='welcome'>Welcome Page</h1>
    </WelcomePageStyled>
  )
}

export default WelcomePage;
