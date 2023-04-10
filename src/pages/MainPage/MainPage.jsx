import React, { Fragment, useState } from "react";
import { MainPageStyled } from "./MainPageStyled.style";
import { Link } from "react-router-dom";
import { FaGamepad } from 'react-icons/fa';
import { MdSurroundSound } from 'react-icons/md';
import { BsCoin } from 'react-icons/bs';
import { FaTextHeight } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';
import { data, buttons } from './data';

const iconMap = {
  "FaGamepad": <FaGamepad className='item-icon' />,
  "BsCoin": <BsCoin className='item-icon' />,
  "MdSurroundSound": <MdSurroundSound className='item-icon' />,
  "FaTextHeight": <FaTextHeight className='item-icon' />,
  "FaPuzzlePiece": <FaPuzzlePiece className='item-icon' />
}

const MainPage = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [activeContent, setActiveContent] = useState(data[0]);

  const buttonHandler = (button) => {
    const contentNumber = button - 1;

    setActiveButton(button)
    setActiveContent(data[contentNumber]);
  }

  return (
    <MainPageStyled>
      <Link to="/welcome">
        <button className="back-button"><AiOutlineLeft/> Back</button>
      </Link>
      <div className="container">
        <div className="navigation">
          {buttons.map((button) => (
            <Fragment key={button.value} >
              <button 
                className={button.value === activeButton? "active" : ""}
                onClick={() => buttonHandler(button.value)}
              >
              {button.value}
              </button>
              {button.hr? <hr className="horizontal"/> : null}
            </Fragment>
          ))}
        </div>
        <div className="content">
          <p className="content-step"><span>Step 1</span> of 4</p>
          <h1>What are you creating?</h1>
          <p className="content-text">
            Give us a quick rundown so that community members can find ang join
            your project.
          </p>
          <div className="content-items">
          {activeContent.map((item) => (
            <div key={item.id} className={`item item-${item.id}`}>
              {iconMap[`${item.iconName}`]}
              <div className='item-text'>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </MainPageStyled>
  );
};

export default MainPage;
