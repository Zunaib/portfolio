import css from "styled-jsx/css";

export default css`
  .modal {
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal-main {
    z-index: 999999;
    position: fixed;
    width: 70%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
    animation: fadeIn 0.25s;
  }

  .display-none {
    display: none;
  }

  @media (max-width: 1300px) {
    .modal-main {
      width: 80%;
    }
  }

  @media (max-width: 1100px) {
    .modal-main {
      width: 85%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
