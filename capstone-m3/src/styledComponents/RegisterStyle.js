import styled from "styled-components"

export const H1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FE0000;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img{
        margin: 15px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 350px;
    height: 550px;
    background: #FFFFFF;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    align-items: center;
    gap: 33px;
`
export const ErrorForm = styled.span`
    font-size: 12px;
    margin: -20px;
`

export const InputForm = styled.input`
    background: #D9D9D9;
    border-radius: 10px;
    width: 290px;
    height: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 38px;
    color: #868686;
    border: none;
`
export const ButtonRegister = styled.button`
    width: 193px;
    height: 53px;
    background: #F81212;
    border-radius: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
`