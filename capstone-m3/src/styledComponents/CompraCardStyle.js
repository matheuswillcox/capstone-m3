import styled from "styled-components"

export const Container = styled.div`
    width: 370px;
    height: 345px;
    background-color: #ffffff;
    padding: 20px 0;
    color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    border-radius: 4px;
    box-shadow: 0 0 1em black;
    font-family: "Roboto",sans-serif;
`
export const Botoes = styled.div`
    width: 200px;
    display:flex;
    justify-content: space-between;
    &>button{
      background-color: #FE0000;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 8px;
      cursor:pointer
    }
    &>button:hover{
      transform: scale(1.1);
      transition: .4s;
    }
    
`