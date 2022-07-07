import { Requisicao } from "../../components/requisicaoTroca";
import { Headersite } from "../../components/header";
import TradesList from "../../components/TradesList";
import { StyledDiv } from "../../styledComponents/StyledHomeTrades";


function Home() {
  return (
    
    <StyledDiv>
      <Headersite />
      <TradesList />
      <Requisicao/>
    </StyledDiv>

  );
}

export default Home;
