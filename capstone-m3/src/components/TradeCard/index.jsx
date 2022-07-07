import { useContext } from "react"
import { GlobalContext } from "../../providers/global"
import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"


const TradeCard = ({ offered, wanted }) => {

    const { user } = useContext(GlobalContext)

    return (
        <StyledTradeCard>
            <img alt="pokimao"></img>
            <h3>{offered}</h3>
            <h3>{wanted}</h3>
            <button>Retirar troca</button>
            <button>Aceitar troca</button>

            <button onClick={() => {console.log(user)}}>teste</button>
        </StyledTradeCard>
        
    )
}

export default TradeCard
