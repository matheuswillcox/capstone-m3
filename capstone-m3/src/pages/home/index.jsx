import { Requisicao } from "../../components/requisicaoTroca";
import { Headersite } from "../../components/header";
import TradesList from "../../components/TradesList";
import { StyledDiv } from "../../styledComponents/StyledHomeTrades";
import {Minigame}from "../../components/minigame"


function Home() {
  return (
    
    <StyledDiv>
      <Headersite />
      <TradesList />
      <Requisicao/>
      <Minigame/>
    </StyledDiv>

  );
}

export default Home;
