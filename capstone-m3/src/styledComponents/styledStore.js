import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  background-color: ${props=>props.theme};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  color: white;
  gap: 200px;

  .divContainer {
    margin-top: 60px;
  }

  .loja {
    padding: 40px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
  }
  .packs {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    gap: 20px;
    cursor: pointer;
  }
  .card {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    background-color: white;
    border-radius: 8px;
    width: 200px;
    padding: 20px;
  }

  @media only screen and (max-width: 900px) {
    gap: 50px;
    .packs {

      flex-direction: column;
    }
  }
`;
