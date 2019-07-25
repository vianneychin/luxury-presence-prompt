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
      width: 50%;
      background-color: red;
    }
    .Top-Right {
      width: 50%;
      background-color: white;
    }
  }


  .Bottom {
    display: flex;
    height: 91.5%;
    width: 100%;
    .Bottom-Left {
      width: 50%;
      background-color: blue;
    }
    .Bottom-Right {
      width: 50%;
      background-color: yellow;
    }
  }
`

export { Wrapper }