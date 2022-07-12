import styled from "styled-components";


export const StyledPokemonTradeCard = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 5px;
border: solid 1px black;

width: 100px;
height: 125px;



align-self: center;


h3 {
    font-weight: 500;
    font-size: 16px;
}

img {
    margin-top: 5px;
    background-color: #42B4E5;
    width: 100px;
    height: 80px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}


@media(max-width: 660){
    img{
        margin-top: 5px;
        background-color: grey !important;
        width: 100px;
        height: 80px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
}
`