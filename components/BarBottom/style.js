import css from "styled-jsx/css";

export default css`
  #bar-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #232323;
    border-top: 1px solid white;
    color: #323232;
  }

  #button-container {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #bar-bottom button {
    width: 85%;
    max-width: 1600px;
    height: 100%;
    padding: 0;
    background-color: #232323;
    border: 0;
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    #bar-bottom button {
      width: 90%;
    }
  }

  @media (max-width: 850px) {
    #bar-bottom button {
      width: 75%;
    }
  }

  @media (max-width: 550px) {
    #bar-bottom button {
      width: 90%;
    }
  }
`;
