import styled from "styled-components";


export const StyledDiv = styled.div`

min-width: 300px;
height: 100vh;

display: flex;
flex-direction: row;

`

export const StyledTradesDiv = styled.div`

min-width: 300px;
min-height: 600px;

justify-self: center;
align-self: center;

margin-left: 50px;

.tradesList {
    display: flex;
    flex-direction: column;

    min-width: 290px;
    height: fit-content;

    padding: 10px;
    border: solid 2px red;

    list-style: none;
}


`

export const StyledTradeCard = styled.li`

display: flex;
flex-direction: row;

width: 280px;
height: 100px;


`