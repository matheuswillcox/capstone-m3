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
    height: 80%;
    max-width: 400px;
    max-height: 900px;
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
export const DivStyled = styled.div`
  
`;
