import { Requisicao } from "../../components/requisicaoTroca";
import { Headersite } from "../../components/header";
import TradesList from "../../components/TradesList";
import { StyledDiv } from "../../styledComponents/StyledHomeTrades";
import { useContext } from "react";
import { GlobalContext } from "../../providers/global";

function Home() {

  const { themeContext } = useContext(GlobalContext)



  const { themeSelector } = themeContext
  return (
    
    <StyledDiv theme={themeSelector}>
      <Headersite />
      <TradesList />
      <Requisicao/>
    </StyledDiv>

  );
}

export default Home;
