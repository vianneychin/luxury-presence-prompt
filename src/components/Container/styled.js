import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

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
            -moz-appearance: none;
            -webkit-appearance: none;
            width: 40px;
            position: relative;
            left: 26px;
            background-color: black;
          }
          > img:nth-of-type(2) {
            height: 14px;
            align-self: center;
            position: relative;
            right: 1px;
          }
        }
      }
    }
  }

  .Bottom {
    display: flex;
    height: 91.5%;
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
            margin-left: auto;
            margin-right: 10%;
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
      /* background-color: var(--WHITE); */
      background-color: dark-grey;
    }
  }
`

export { Wrapper }
