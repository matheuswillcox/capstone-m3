import styled from "styled-components"

export const H1 = styled.h1`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color:  ${props=>props.theme};
`

export const Container = styled.div`
  background-color: ${props=>props.theme};
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 20px;
    background-color:  ${props=>props.theme};
    width: 100vw;
    height: 100vh;

    img{
        margin: 15;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    max-width: 350px;
    height: 55%;
    max-height: 550px;
    background: #FFFFFF;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    align-items: center;
    gap: 10px;
    h1{
        margin: 0;
        margin-top: 15px;
    }
    @media(min-width: 480px){
        gap: 20px;
        height:55%;
        h1{
            margin-top: 15px;
        }
    }
`
export const ErrorForm = styled.span`
    font-size: 12px;
    margin: -20px;
`

export const InputForm = styled.input`
    background: #D9D9D9;
    border-radius: 10px;
    width: 90%;
    height: 50px;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 38px;
    color: #868686;
    border: none;
`
export const ButtonRegister = styled.button`
    width: 70%;
    height: 53px;
    background:  ${props=>props.theme};
    border-radius: 15px;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    margin-bottom: 10px;
`