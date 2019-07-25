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
      color: var(--TEXT_GREY);
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
          > li {
            /* width: 128px; */
            /* background-color: red; */
            width: 100%;
            text-align: left;
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
