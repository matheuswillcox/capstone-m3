import styled from "styled-components";
export const Container = styled.div`
  color: black;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 98.7vw;
  height: 100%;
  display: flex;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  .popup {
    
    box-shadow: 0 0 1em black;
    border-radius: 10px;
    background-color: #ffffff;
    width: 90%;
    height: 70%;
    max-width: 250px;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 25px;
    justify-content: center;
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
  div {
    animation: AnimarModal 0.3s;
  }
`;
export const Botoes = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  button {
    cursor: pointer;
    border-radius: 8px;
    width: 80px;
    border: 0;
    height: 30px;
    font-weight: bold;
    background-color: grey;
    color: white;
  }
  .acceptDelete-btn {
    background-color: red;
    
  }
`;
