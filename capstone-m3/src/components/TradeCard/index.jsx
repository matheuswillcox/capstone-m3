import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"


const TradeCard = ({ offered, wanted }) => {

    return (
        <StyledTradeCard>
            <img alt="pokimao"></img>
            <h3>{offered}</h3>
            <h3>{wanted}</h3>
            <button>Retirar troca</button>
            <button>Aceitar troca</button>
        </StyledTradeCard>
    )
}

export default TradeCard
