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
      }
      .Hamburger {
        height: 32%;
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        > div {
          background-color: white;
          height: 3px;
          width: 50%;
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
    }
    .Bottom-Right {
      width: 85%;
      background-color: var(--WHITE);
    }
  }
`

export { Wrapper }