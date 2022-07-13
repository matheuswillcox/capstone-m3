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
    @media(max-width: 660px){
        display: none !important;
    }
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
    font-size: 14px;
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
export const DivHeader = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    height: 60px;
    
    svg{
        min-width: 30px;
        min-height: 30px;
        max-width: 30px;
        max-height: 30px;
        padding-left: 20px;
        color: #fff;
    }
    span{
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        margin-left: 10px;
    }
    @media(min-width: 660px){
        display: none !important;
    }
`
export const ModalMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    max-width: 300px;
    box-shadow: 5px 0 20px 0 #000;
    height: 100vh;
    z-index: 30;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    background-color: rgb(255,255,255);
    animation: openHeader 1s ease;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        
    }
    .closeHeader{
        background: none;
        border: 0;
        color: red;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        margin-right: 20px;
    }
    
    @keyframes openHeader {
        from {
            transform: translate3d(-380px, 0, 0);
        }   
        to {
            transform: translate3d(0, 0, 0);
        }
        
    }
    @media(min-width:660px){
        display: none;
    }
    .cheater{
        margin-bottom: 10px;
    }
    .popup button{
        width :100%;
    }
    .popup .ClosePopup{
        width: 35px;
        height: 35px;
    }
`
