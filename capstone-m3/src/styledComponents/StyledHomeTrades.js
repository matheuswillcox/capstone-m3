import styled from "styled-components";


export const StyledDiv = styled.div`

min-width: 300px;
height: 100vh;
background-color: ${props=>props.theme};
display: flex;
flex-direction: row;
@media (max-width:660px) {
    flex-direction: row;
    flex-wrap: wrap;
}
`

export const StyledTradesDiv = styled.div`

min-width: 300px;
margin-left: 50px;
background-color: white;
display: flex;
flex-direction: column;
width: 90%;
max-width: 1000px;
margin-left: auto;
margin-right: auto;
margin-top: 100px;

box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
border-radius: 10px;

.tradesList {
    display: flex;
    flex-direction: column;

    gap: 10px;

    min-width: 290px;
    
    overflow: auto;
    overflow-x: hidden;

    padding: 20px;

    list-style: none;

    .tradesList-divInput {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        min-width: 290px;

        .tradesList-input {
            padding: 10px;
        }
    }
}

@media (max-width:660px) {
    height: 85%;
    margin-top: 0;
    margin-bottom: 50px;
    ul{
        overflow-y: scroll;
        max-height: 90%;
    }
    ul::-webkit-scrollbar {
        width: 5px !important;
    }
    ul::-webkit-scrollbar-track{
        background: none;
        
    }
    ul::-webkit-scrollbar-thumb{
        background: linear-gradient(red,blue);
        border-radius: 15px;
    }
    
}
@media (min-width:660px) {
    width: 70%;
    ul{
        overflow-y: scroll;
    }
    ul::-webkit-scrollbar {
        width: 5px;
    }
    ul::-webkit-scrollbar-track{
        background: none;
        
    }
    ul::-webkit-scrollbar-thumb{
        background: linear-gradient(red,blue);
        border-radius: 15px;
    }
}

`

export const StyledTradeCard = styled.li`

display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #fff;

font-family: 'Roboto', sans-serif;

min-width: 280px;
height: fit-content;


border-radius: 10px;
transition: 0.6;

border: solid 1px #f9f9f9;

gap: 10px;

:hover {
    transition: 0.6;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 15%), 0px 2px 2px 0px rgb(0 0 0 / 18%), 0px 1px 5px 0px rgb(0 0 0 / 14%);
}

.redLine {
    background-color: ${props=>props.theme};
    height: 100%;
    width: 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

@media (min-width: 1024px) {
    width: 96%;
}

.acceptTrade-btn {

    display: flex;

    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    align-self: center;
    justify-self: center;

    border: none;
    border-radius: 5px;

    margin-right: 10px;

    background-color: #FF4E4E;
    color: white;

    cursor: pointer;

    transition: 0.6;

    :hover {
        background-color: red;
        transition: 0.6;
    }

}

.receiveTrade-btn {
    display: flex;

    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    align-self: center;
    justify-self: center;

    border: none;
    border-radius: 5px;

    margin-right: 10px;

    background-color: #85FF9E;
    color: #000;

    cursor: pointer;

    transition: 0.6;

    :hover {
        background-color: #337357;
        color: white;
        transition: 0.6;
    }
}

.deleteTrade-btn {
    display: flex;

    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    align-self: center;
    justify-self: center;

    background-color: #828282;
    color: white;

    border: none;
    border-radius: 5px;

    margin-right: 10px;

    cursor: pointer;

    transition: 0.6;

    :hover {
        background-color: #727272;
        transition: 0.6;
    }
}

.userInfo {

    display: flex;
    flex-direction: column;

    align-self: center;
    align-items: center;

    img {
        width: 70px;
        height: 70px;
    }

    h3 {
        font-size: 16px;
    }
}

.arrowTrade {
    display: flex;

    align-self: center;
    align-items: center;

    .arrowTrade-arrow  {
        font-size: 30px;
    }
}
    @media(max-width:660px){
        width: 95%;
        .userInfo{
            display: none;
        }
    }

`