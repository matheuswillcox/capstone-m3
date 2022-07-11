import { useContext, useEffect, } from "react";
import { GlobalContext } from "../../providers/global";
import { Main,Container, Article, Box, Grid, Card, FiltersDiv, BoxTema, BoxRaridade, BoxTipo, BoxInput } from "../../styledComponents/DashBoardStyle";
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react";


function UserDash() {

  const { allPokemonsContext, themeContext, userContext, tradesContext } = useContext(GlobalContext)

  const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

  const { getTrades, trades, setTrades } = tradesContext

  const { themeSelector, setThemeSelector } = themeContext

  const {user, userToken} = userContext

  const [inputText,setInputText] = useState("")
  
  useEffect(()=> {}, [allPokemons])

  useEffect(() => {
    getTrades(userToken, setTrades)
}, []) 
  
  return (
    <>
    <Main theme={themeSelector} >
      <Container >
        <h1>Minha Coleção</h1>
          <Article>
              <Box>
                <Grid>
                { allPokemons?.map((e)=>
                  user.pokemon?.filter(({name})=>{return e?.name === name}).length > 0 ?
                  <Card key={e?.id}>
                    <img src={e?.sprites.front_default} alt=""/>
                    <div>  
                    <h3>{e?.name}</h3>
                    <img className="type" src={require("../../image/image.png")} alt="imgType"/>
                    <span>Raridade</span>
                    </div>
                  </Card>
                  :
                  <Card key={e?.id} color="block" >
                    <img color = "block" src={e?.sprites.front_default} alt=""/>
                    <div>  
                    <h3>{e?.name}</h3>
                    <img className="type" src={require("../../image/image.png")} alt="imgType"/>
                    <span>Raridade</span>
                    </div>
                  </Card>
                )}
                </Grid>
              </Box>
                <FiltersDiv>
                  <span>Tema:</span>
                  <BoxTema>
                    <div onClick={()=> setThemeSelector("var(--red)") } style={{background:"var(--red)", outline: "1px solid black"}}></div>
                    <div onClick={()=> setThemeSelector("var(--yellow)") } style={{background:"var(--yellow)", outline: "1px solid black"}}></div>
                    <div onClick={()=> setThemeSelector("var(--blue)") } style={{background:"var(--blue)", outline: "1px solid black"}}></div>
                  </BoxTema>
                  <span>Nome:</span>
                  <BoxInput>
                    <AiOutlineSearch/>
                    <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
                  </BoxInput>
                  <span>Raridade:</span>
                  <BoxRaridade>
                    <div style={{backgroundColor:"#D9D9D9"}}>Normal</div>
                    <div style={{backgroundColor:"#006FC9"}}>Raro</div>
                    <div style={{backgroundColor:"#FBD100"}}>Super Raro</div>
                    <div style={{backgroundColor:"#4C6AB2"}}>Ultra Raro</div>
                  </BoxRaridade>
                  <span>Tipo:</span>
                  <BoxTipo>
                    <img src={require("../../image/image.png")} alt="imgType"/>
                    <img src={require("../../image/image 5.png")} alt="imgType"/>
                    <img src={require("../../image/image 6.png")} alt="imgType"/>
                    <img src={require("../../image/image 7.png")} alt="imgType"/>
                    <img src={require("../../image/image 8.png")} alt="imgType"/>
                    <img src={require("../../image/image 9.png")} alt="imgType"/>
                    <img src={require("../../image/image 10.png")} alt="imgType"/>
                    <img src={require("../../image/image 11.png")} alt="imgType"/>
                    <img src={require("../../image/image 12.png")} alt="imgType"/>
                    <img src={require("../../image/image 13.png")} alt="imgType"/>
                    <img src={require("../../image/image 14.png")} alt="imgType"/>
                    <img src={require("../../image/image 15.png")} alt="imgType"/>
                    <img src={require("../../image/image 16.png")} alt="imgType"/>
                    <img src={require("../../image/image 17.png")} alt="imgType"/>
                    <img src={require("../../image/image 18.png")} alt="imgType"/>
                    <img src={require("../../image/image 19.png")} alt="imgType"/>
                    <img src={require("../../image/image 20.png")} alt="imgType"/>
                    <img src={require("../../image/image 21.png")} alt="imgType"/>
                  </BoxTipo>
                </FiltersDiv>
          </Article>
      </Container>
    </Main>
    </>
  );
}

export default UserDash