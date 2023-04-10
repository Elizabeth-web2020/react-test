import styled from 'styled-components';

export const WelcomePageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  padding: 50px;

  .go-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .go-button {
    width: 100px;
    height: 35px;
    background-color: #736f72;
    border: none;
    color: #fff;
    padding: 5px 25px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: #cccccc;
    }
  }

  .welcome {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;
  }
`;
