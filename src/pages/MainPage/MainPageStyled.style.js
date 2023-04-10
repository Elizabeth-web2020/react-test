import styled from 'styled-components';

export const MainPageStyled = styled.div`
  max-width: 100vw;
  box-sizing: border-box;
  background-color: #000;
  padding: 50px;
  color: #fff;

  & h1, p {
    padding: 0;
    margin: 0;
  }

  .back-button {
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
    
    @media (max-width: 600px) {
      max-width: 150px;
      background-color: inherit;
      color: purple;
      border: none;
      font-size: 16px;
      padding: 5px;
    }
  }

  .container {
    width: 100%;
    text-align: center;
    margin-top: 5px;

    @media (max-width: 600px) {
      margin-top: 10px;
    }

      .navigation {
      max-width: 900px;
      margin: auto;
      display: flex;
      align-items: center;
      padding: 0px 20px;

      @media (max-width: 600px) {
        max-width: 75%;
      }

      & button {
        width: 50px;
        height: 50px;
        padding: 0 5px;
        background-color: #736f72;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        color: #fff;

        @media (max-width: 600px) {
          width: 30px;
          height: 30px;
        }
      }

      .active {
        border: 1px solid purple;
        background-color: #000; 
      }
    }

    .horizontal {
      display: block;
      position: relative;
      padding: 0px;
      width: 150px;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
      margin-left: auto;
      margin-right: auto;
      border: 0;
      border-top: 1px solid #736f72;

      @media (max-width: 900px) {
          width: 80px;
      }

      @media (max-width: 600px) {
          width: 50px;
      }

      @media (max-width: 500px) {
          width: 30px;
      }
    }

    .content {
      max-width: 1100px;
      padding: 50px 0px;
      margin: auto;

      & h1 {
        margin: 15px 0;

        @media (max-width: 600px) {
          font-size: 25px;
        }
      }

      .content-step {
        & span {
          color: #736f72;
        }
      }

      .content-text {
        color: #736f72;
      }

      .content-items {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1200px) {
          justify-content: center;
        }

        .item {
          width: 500px;
          border-radius: 25px;
          margin-bottom: 15px; 
          padding: 20px;
          text-align: start;
          
          @media (max-width: 600px) {
            display: flex;
          }

          .item-icon {
            width: 100px;
            height: 80px;

            @media (max-width: 600px) {
              margin-right: 10px;
              width: 70px;
              height: 50px;
            }
          }

          .item-text {
            color: #cccccc;
            
            & h1 {
              @media (max-width: 600px) {
                margin: 0;
                margin-bottom: 10px;
                font-size: 15px;
              }
            }

            & p {
              @media (max-width: 600px) {
                font-size: 14px;
              }
            }
          }
        }

        .item-1 {
          border: 1px solid #4CAF50;
          background:radial-gradient(circle at 64% 100%, rgba(76, 175, 80, 1) 5%, rgba(0, 0, 0, 1) 68%);

          .item-icon {
            fill: #4CAF50;
          }
        }
        .item-2 {
          border: 1px solid #673AB7;
          background:radial-gradient(circle at 64% 100%, rgba(103, 58, 183, 1) 5%, rgba(0, 0, 0, 1) 68%);

          .item-icon {
            fill: #673AB7;
          }
        }
        .item-3 {
          border: 1px solid #9C27B0;
          background:radial-gradient(circle at 64% 100%, rgba(156, 39, 176, 1) 5%, rgba(0, 0, 0, 1) 68%);

          .item-icon {
            fill: #9C27B0;
          }
        }
        .item-4 {
          border: 1px solid #3F51B5;
          background:radial-gradient(circle at 64% 100%, rgba(63, 81, 181, 1) 5%, rgba(0, 0, 0, 1) 68%);

          .item-icon {
            fill: #3F51B5;
          }
        }
        .item-5 {
          border: 1px solid #FFC107;
          background:radial-gradient(circle at 64% 100%, rgba(255, 193, 7, 1) 5%, rgba(0, 0, 0, 1) 68%);

          .item-icon {
            fill: #FFC107;
          }
        }
      }
    }
  }
`;