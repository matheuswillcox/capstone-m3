import styled from "styled-components";

export const Header = styled.header`
    height: 100vh;
    width: 90px;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.25);
    `;

export const Div = styled.div`
    width: 90px;
    height: 90px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    color: ${props=>props.theme};
    font-size: 18px;

    &:hover{
        transition: .6s;
        background-color: ${props=>props.theme};
        color: #ffffff
    }

`;
export const User = styled.div`
    width: 90px;
    height: 110px;
    font-size: 24px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`;

export const Icons = styled.p`
    font-size:32px;
    margin:0;
`;

export const Logo = styled.img`
    width:80px;
    margin: 10px 0 10px 0;
`;

export const ImagemUser = styled.img`
    width:70px;
    height:70px;
    background-color: ${props=>props.theme};
    border-radius:50%;
`;