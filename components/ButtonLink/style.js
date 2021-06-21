import css from "styled-jsx/css";

export default css`
  .button-container {
    flex: 1;
    margin: 0.5rem 0.5rem 0 0;
    max-width: 33.3%;
    position: relative;
  }

  .button-container:last-child {
    margin-right: 0;
  }

  button {
    width: 100%;
    height: 40px;
    padding: 0.5rem;
    border: none;
    color: white;
    background-color: #323232;
    cursor: pointer;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;
