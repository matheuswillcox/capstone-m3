import { Headersite } from "../../components/header";
import TradesList from "../../components/TradesList";
import { StyledDiv } from "../../styledComponents/StyledHomeTrades";


function Home() {
  return (
    
    <StyledDiv>
      <Headersite />
      <TradesList />
    </StyledDiv>

  );
}

export default Home;
