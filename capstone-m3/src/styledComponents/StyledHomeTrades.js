import styled from "styled-components";


export const StyledDiv = styled.div`

min-width: 300px;
height: 100vh;

display: flex;
flex-direction: row;

`

export const StyledTradesDiv = styled.div`

min-width: 300px;
height: fit-content;
margin-left: 50px;

display: flex;
flex-direction: column;

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


`

export const StyledTradeCard = styled.li`

display: flex;
flex-direction: row;
justify-content: space-between;

font-family: 'Roboto', sans-serif;

min-width: 280px;
height: 150px;

border-radius: 10px;
transition: 0.6;

border: solid 1px #f9f9f9;

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
    min-width: 824px;
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


`