import styled from "styled-components";
export const Container = styled.div`
  color: black;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
    max-height: 550px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 25px;
    justify-content: center;
  }
  .popup div {
    display: flex;
  }
  figure {
    width: 100%;
    margin: 0;
    max-width: 225px;
    max-height: 225px;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0%) saturate(0%) opacity(69%);
    -webkit-filter: brightness(0%) saturate(0%) opacity(69%);
    -moz-filter: brightness(0%) saturate(0%) opacity(69%);
    transition: 1s ease-in-out;
  }
  .color {
    transition: 1s;
    filter: opacity(99%);
    -webkit-filter: opacity(99%);
    -moz-filter: opacity(99%);
  }

  span {
    margin-top: 10px;
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
  button {
    border: 0;
    cursor: pointer;
  }

  @media (max-width: 660px){
    width: 100vw !important;
    height: 100vh !important;
    justify-content: center !important;
    padding-left: 0 !important;
    .popup{
      padding-left: 0 !important;
    }
  }
`;
export const DivStyled = styled.div`
  height: 30%;
  width: 90%;
  gap: 10px;
  flex-direction: column;
  input {
    width: 93%;
    height: 30px;
    border-radius: 10px;
    padding-left: 15px;
  }
  button {
    height: 33.9px;
    border-radius: 10px;
    background-color: red;
    color: #fff;
  }
  .ClosePopup {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 25px;
    background-color: white;
    color: red;
    top: 0;
    right: 0;
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 1);
  }
  
  
`;
