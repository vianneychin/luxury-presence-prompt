import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--OFF_WHITE);

  .Top {
    display: flex;
    height: 8.5%;
    max-height: 77.86px;
    min-height: 77.86px;
    width: 100%;
    .Top-Left {
      height: 78.1px;
      width: 15%;
      background-color: var(--NAV_BLUE);
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        height: 50%;
        width: 70%;
        background-color: rgb(146, 146, 146);
        border: none;
        border-radius: 1px;
        margin-right: 4%;
      }
      .Hamburger {
        height: 32%;
        width: 37.8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        :hover {
          cursor: pointer;
        }
        > div {
          background-color: white;
          height: 3px;
          width: 18.89px;
        }
      }
      @media (max-width: 1200px) {
        input {
          display: none;
        }
      }
    }
    .Top-Right {
      width: 85%;
      background-color: var(--MAIN_BLUE);
      display: flex;
      align-items: center;
      > div:nth-of-type(1) {
        width: 200px;
        display: flex;
        justify-content: space-around;
        margin-left: 31px;
        > img {
          position: relative;
          top: 0px;
        }
        > input {
          margin-left: 15px;
          background-color: var(--MAIN_BLUE);
          border: none;
          ::placeholder {
            color: #fff;
          }
        }
      }
      > div:nth-of-type(2) {
        width: 100%;
        > div {
          display: flex;
          justify-content: flex-end;
          > img:nth-of-type(1) {
            height: 77.86px;
            position: relative;
            left: 26.5px;
          }
          > select {
            width: 40px;
            position: relative;
            left: 15px;
            background-color: var(--NAV_DARK_BLUE);
          }
          > img:nth-of-type(2) {
            height: 14px;
            align-self: center;
            position: relative;
            right: 10px;
          }
        }
      }
    }
  }

  .Bottom {
    display: flex;
    height: 100%;
    width: 100%;
    .Bottom-Left {
      width: 15%;
      background-color: var(--NAV_DARK_BLUE);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 13.5px;
      > ul {
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > div {
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          > svg {
            margin-right: 10%;
            margin-left: 10%;
            height: 46px;
            width: 34px;
            @media (max-width: 1200px) {
              margin: 0;
            }
          }
          > a {
            width: 100%;
            color: var(--TEXT_GREY);
            @media (max-width: 1200px) {
              display: none;
            }
            > li {
              width: 100%;
              text-align: left;
            }
          }
          .active {
            color: red;
          }
          > img {
            height: 10px;
            width: 10px;
            margin-left: 5%;
            margin-right: 5%;
          }
        }
        @media (max-width: 1200px) {
          li {
            display: none;
          }
          img {
            display: none;
          }
        }
      }
    }
    .Bottom-Right {
      width: 85%;
      display: flex;
      flex-direction: column;
      padding-top: 2.5%;
      padding-right: 2.5%;
      padding-left: 2.5%;
      .Header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1.9%;
        > div:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          h1 {
            font-weight: 200;
            font-size: 3rem;
          }
          h2 {
            color: var(--TEXT_GREY);
            font-weight: 400;
          }
        }
        > div:nth-of-type(2) {
          display: flex;
          select {
            padding-right: 29px;
            background-color: white;
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: rgb(89, 179, 220);
            color: rgb(255, 255, 255);
            font-size: 13px;
            font-weight: 300;
            align-items: center;
            width: 280px;
            border: 1px solid rgb(89, 179, 220);
            display: flex;
            text-align-last: center;
            position: relative;
            left: 20px;
            border-radius: 0;
            height: 90%;
          }
          > img {
            height: 14px;
            position: relative;
            right: 15px;
            top: 24px;
          }
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 58.5px;
            margin-left: 5.4px;
            background-color: #fff;
            height: 90%;
            img {
              width: 25px;
            }
          }
        }
      }
      .Main {
        display: flex;
        background-color: var(--WHITE);
        flex-direction: column;
        flex-grow: 1;
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5),
          0 15px 40px rgba(166, 173, 201, 0.2);
        > div:nth-of-type(1) {
          padding-left: 2%;
          background-color: white;
          display: flex;
          align-items: center;
          height: 15%;
          width: 100%;
          h1 {
            font-size: 30px;
            font-weight: 400;
          }
          h2 {
            color: var(--TEXT_GREY);
            font-weight: 400;
            padding-left: 1.5%;
            padding-top: 0.7%;
          }
        }
        hr {
          border: 0;
          border: 1px solid rgb(242, 242, 242);
          display: block;
        }
        > div:nth-of-type(2) {
          display: flex;
          justify-content: space-around;
          padding-right: 5%;
          padding-left: 5%;
          > div {
            display: flex;
            justify-content: space-around;
            width: 100%;

            > div {
              background-color: white;
              display: flex;
              flex-direction: column;
              text-align: center;
              h1 {
                font-size: 40px;
                font-weight: 400;
              }
              h2 {
                color: var(--TEXT_GREY);
                font-weight: 400;
              }
            }
          }
        }
        > hr {
          margin-top: 3.5%;
          display: block;
        }
      }
      .Footer {
        background-color: cornflowerblue;
        display: flex;
        height: 70px;
      }
    }
  }
`

export { Wrapper }
