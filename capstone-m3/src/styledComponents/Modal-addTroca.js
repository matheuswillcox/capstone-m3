import styled from "styled-components";

export const Container = styled.div`
  width: 98.7vw;
  height: 98vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;

  form {
    width: 90%;
    max-width: 300px;
    max-height: 300px;
    padding: 0 20px;
    padding-bottom: 25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    gap: 10px;
    border-radius: 20px;
    -webkit-box-shadow: 5px 5px 17px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 17px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 17px -1px rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  form input {
    padding-left: 15px;
    width: 90%;
    height: 30px;
  }
  button {
    border: 0;
    background: none;
    margin-top: 20px;
    color: red;
    cursor: pointer;
    min-height: 20px;
    min-width: 20px;
    max-width: 25px;
    max-height: 25px;
  }
  span {
    display: flex;
    margin: 0;
    font-size: 12px;
    color: #f81212;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  svg {
    min-height: 20px;
    min-width: 20px;
    max-width: 25px;
    max-height: 25px;
  }
  .TrocarPokemon {
    min-width: max-content;
    position: relative;
    width: 90%;
    max-width: 100px;
    left: 63.3%;
    height: 35px;
    max-height: 38px;
    border-radius: 5px;
    background: #42b4e6;
    color: #fff;
    font-size: 16px;
  }
  @keyframes AnimarModal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  form {
    animation: AnimarModal 0.3s;
  }
`;
