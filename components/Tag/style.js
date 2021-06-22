import css from "styled-jsx/css";

export default css`
  div {
    font-size: 0.72rem;
    display: inline-block;
    width: auto;
    padding: 0.4rem 0.65rem calc(0.4rem - 2px) 0.65rem;
    margin: 0.5rem 0.5rem 0 0;
    border-bottom: 2px solid white;
  }

  div:last-child {
    margin-right: 0;
  }

  .tag-html {
    color: white;
    border-bottom-color: #e34c26;
  }

  .tag-css {
    color: white;
    border-bottom-color: #563d7c;
  }

  .tag-scss {
    color: white;
    border-bottom-color: #563d7c;
  }

  .tag-javascript {
    color: white;
    border-bottom-color: #f0db4f;
  }

  .tag-typescript {
    color: white;
    border-bottom-color: #2b7489;
  }

  .tag-nodejs {
    color: white;
    border-bottom-color: #68a063;
  }

  .tag-expressjs {
    color: white;
    border-bottom-color: lightgray;
  }

  .tag-sql {
    color: white;
    border-bottom-color: #007bff;
  }

  .tag-reactjs {
    color: white;
    border-bottom-color: #61dafb;
  }

  .tag-redux {
    color: white;
    border-bottom-color: #764abc;
  }

  .tag-python {
    color: white;
    border-bottom-color: #2b5b84;
  }

  .tag-pymongo {
    color: white;
    border-bottom-color: lightgreen;
  }

  .tag-mongodb {
    color: white;
    border-bottom-color: green;
  }

  .tag-ruby {
    color: white;
    border-bottom-color: #701516;
  }

  .tag-wip {
    color: white;
    border-bottom-color: pink;
  }
`;
