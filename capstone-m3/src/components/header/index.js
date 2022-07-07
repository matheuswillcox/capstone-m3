import { useNavigate } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { GiCardPick, GiGems } from "react-icons/gi"
import { RiLogoutBoxLine } from "react-icons/ri"
import { Header, Logo, User, Div, Icons, ImagemUser } from "../../styledComponents/styledHeader";
// import { useContext } from "react";
// import { GlobalContext } from "../../providers/global";


export const Headersite = () =>{

    // const { userContext } = useContext(GlobalContext);

    // const { setUserToken } = userContext;  

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/");
    }
    const handleClick2 = () =>{
        navigate("/dashboard");
    }
    const handleClick3 = () =>{
        navigate("/store");
    }
    const handleClick4 = () =>{
        localStorage.removeItem("token")
        // setUserToken("")
        navigate("/login");
    }

    return(<>
        <Header>
            <Logo src={require('../../image/logo.png')}/>
            <User><ImagemUser></ImagemUser><GiGems color="#42B4E5"/> <span>1000</span></User>
            <Div onClick={handleClick}><Icons><FaHome/></Icons><span>Home</span></Div>
            <Div onClick={handleClick2}><Icons><GiCardPick/></Icons><span>Coleção</span></Div>
            <Div onClick={handleClick3}><Icons><FaShoppingBag/></Icons><span>Loja</span></Div>
            <Div onClick={handleClick4}><Icons><RiLogoutBoxLine/></Icons><span>Logout</span></Div>
        </Header>
    </>)
};
