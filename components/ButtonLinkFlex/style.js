import css from "styled-jsx/css";

export default css`
  .button-container {
    flex: 1;
  }

  #left-button,
  #right-button {
    border-right: 1px solid white;
  }

  #left-button {
    border-left: 1px solid white;
  }

  button {
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    padding: 0;
    font-size: 1rem;
    background-color: #232323;
    border: 0;
  }
`;
