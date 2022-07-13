import styled from "styled-components";


export const StyledPokemonTradeCard = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 5px;
border: solid 1px black;

width: 80px;
height: 125px;

align-self: center;

@media (min-width: 660px) {
    width: 100px;
}


h3 {
    font-weight: 500;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

img {
    background-color: #42B4E5;
    width: 80px;
    height: 90px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    @media (min-width: 660px) {
        width: 100px;
        height: 86px;
    }
}



`