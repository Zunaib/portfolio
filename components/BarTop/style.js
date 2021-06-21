import css from "styled-jsx/css";

export default css`
  #bar-top {
    width: 100%;
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    color: #323232;
    background-color: #323232;
    border-bottom: 1px solid white;
    z-index: 99;
  }

  #buttons-container {
    width: 85%;
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: 1200px) {
    #buttons-container {
      width: 90%;
    }
  }

  @media (max-width: 850px) {
    #buttons-container {
      width: 75%;
    }
  }

  @media (max-width: 550px) {
    #buttons-container {
      width: 90%;
    }
  }
`;
