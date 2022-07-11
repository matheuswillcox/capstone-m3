import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:var(--theme);
  gap: 20px;

  form {
    background-color: #fff;
    width: 90%;
    height: 90%;
    max-width: 400px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 25px;
    padding-top: 15px;
  }
  form h1 {
    color: var(--theme);
    margin: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
  }
  form input {
    background: #d9d9d9;
    border-radius: 10px;
    border: 0;
    padding: 0;
    padding-left: 15px;
    height: 38px;
    width: 90%;
    min-width: 150px;
    max-width: 200px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  section {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  div input {
    margin-left: 10px;
  }
  button {
    background: var(--theme);
    border-radius: 15px;
    color: #fff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 80%;
    border: 0;
    max-width: 150px;
    height: 38px;
    cursor: pointer;
  }
  .Eye {
    color: black;
    max-width: 13px;
    position: relative;
    right: 25px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0;
  }
  .Register {
    width: min-content;
    height: max-content;
    background-color: #fff;
    color: #000;
    font-size: 16px;
  }
  .email-error {
    display: flex;
    margin: 0;
    font-size: 12px;
    color: #f81212;
    position: absolute;
    left: 43.2%;
    top: 52.4%;
  }
  div span {
    display: flex;
    margin: 0;
    font-size: 12px;
    color: #f81212;
    position: absolute;
    left: 43.2%;
    top: 63.8%;
  }
`;
