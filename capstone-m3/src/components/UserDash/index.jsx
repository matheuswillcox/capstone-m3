import { useContext, useEffect } from "react";
import { GlobalContext } from "../../providers/global";
import {
  Main,
  Container,
  Article,
  Box,
  Grid,
  Card,
  FiltersDiv,
  BoxTema,
  BoxRaridade,
  BoxTipo,
  BoxInput,
  Double,
} from "../../styledComponents/DashBoardStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import ModalDashBoard from "../ModalDashBoard";

function UserDash() {
  const { allPokemonsContext, themeContext, userContext, tradesContext, rarityContext  } =
    useContext(GlobalContext);

  const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext;

  const { getTrades, trades, setTrades } = tradesContext;

  const { themeSelector, setThemeSelector } = themeContext;

  const { user, userToken } = userContext;

  const [inputText, setInputText] = useState("");

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [filtro, setFiltro] = useState("");

  const { rarity } = rarityContext

  useEffect(() => {}, [allPokemons]);

  useEffect(() => {
    filtroNome();
  }, [inputText]);

  useEffect(() => {
    getTrades(userToken, setTrades);
  }, []);

  const filtroNome = () => {
    if (inputText !== "") {
      setFilteredPokemons(
        allPokemons.filter((element) => {
          return element.name.toLowerCase().includes(inputText);
        })
      );
    } else {
      setFilteredPokemons([]);
    }
  };

  const rarityFilter = (data) => {

    const type = rarity[data]
    
    setFilteredPokemons(allPokemons.filter(item => type.includes(item.id)))
   
  };



  // const filtroRaridade = (input) => {
  //   if (input === filtro) {
  //     setFiltro("");
  //   } else if (input === "normal") {
  //     setFiltro(input);
  //     setFilteredPokemons(
  //       allPokemons.filter((element) => {
  //         console.log(allPokemons);

  //         return element.base_experience < 100;
  //       })
  //     );
  //   } else if (input === "raro") {
  //     setFiltro(input);
  //     setFilteredPokemons(
  //       allPokemons.filter((element) => {
  //         return (
  //           element.base_experience >= 100 && element.base_experience < 151
  //         );
  //       })
  //     );
  //   } else if (input === "super_raro") {
  //     setFiltro(input);
  //     setFilteredPokemons(
  //       allPokemons.filter((element) => {
  //         return (
  //           element.base_experience >= 151 && element.base_experience < 251
  //         );
  //       })
  //     );
  //   } else if (input === "ultra_raro") {
  //     setFiltro(input);
  //     setFilteredPokemons(
  //       allPokemons.filter((element) => {
  //         return element.base_experience >= 251;
  //       })
  //     );
  //   }
  // };

  const filtroTipo = (input) => {
    if (filtro === input) {
      setFiltro("");
    } else {
      setFiltro(input);
      setFilteredPokemons(
        allPokemons.filter((element) => {
          if (element.types.length > 1) {
            if (element.types[0].type.name !== input) {
              return element.types[1].type.name === input;
            } else {
              return element.types[0].type.name === input;
            }
          }
          return element.types[0].type.name === input;
        })
      );
    }
  };

  return (
    <>
      <Main theme={themeSelector}>
        <Container>
          <h1>Minha Coleção</h1>
          <Article>
            <Box>
              <Grid>
                {filteredPokemons.length >= 1
                  ? filteredPokemons?.map((e) =>
                      user.pokemon?.filter(({ name }) => {
                        return e?.name === name;
                      }).length > 0 ? (
                        <Card key={e?.id} raridade={rarity} id={e.id}>
                          
                          <img src={e?.sprites.front_default} alt="" />
                          <div>
                            <h3>{e?.name}</h3>
                            {e.types.length > 1 ? (
                              <Double>
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[0].type.name}.png`)}
                                  alt="imgType"
                                />
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[1].type.name}.png`)}
                                  alt="imgType"
                                />
                              </Double>
                            ) : (
                              <img
                                className="type"
                                src={require(`../../image/${e.types[0].type.name}.png`)}
                                alt="imgType"
                              />
                            )}
                            <span>Raridade</span>
                          </div>
                        </Card>
                      ) : (
                        <Card
                          key={e?.id}
                          color="block"
                          raridade={rarity} id={e.id}
                        >
                          <img
                            color="block"
                            src={e?.sprites.front_default}
                            alt=""
                          />
                          <div>
                            <h3>{e?.name}</h3>
                            {e.types.length > 1 ? (
                              <Double>
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[0].type.name}.png`)}
                                  alt="imgType"
                                />
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[1].type.name}.png`)}
                                  alt="imgType"
                                />
                              </Double>
                            ) : (
                              <img
                                className="type"
                                src={require(`../../image/${e.types[0].type.name}.png`)}
                                alt="imgType"
                              />
                            )}
                            <span>Raridade</span>
                          </div>
                        </Card>
                      )
                    )
                  : allPokemons?.map((e) =>
                      user.pokemon?.filter(({ name }) => {
                        return e?.name === name;
                      }).length > 0 ? (
                        <Card key={e?.id} raridade={rarity} id={e.id}>
                          <img src={e?.sprites.front_default} alt="" />
                          <div>
                            <h3>{e?.name}</h3>
                            {e.types.length > 1 ? (
                              <Double>
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[0].type.name}.png`)}
                                  alt="imgType"
                                />
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[1].type.name}.png`)}
                                  alt="imgType"
                                />
                              </Double>
                            ) : (
                              <img
                                className="type"
                                src={require(`../../image/${e.types[0].type.name}.png`)}
                                alt="imgType"
                              />
                            )}
                            <span>Raridade</span>
                          </div>
                        </Card>
                      ) : (
                        <Card
                          key={e?.id}
                          color="block"
                          id={e.id}
                          raridade={rarity}
                        >
                          <img
                            color="block"
                            src={e?.sprites.front_default}
                            alt=""
                          />
                          <div>
                            <h3>{e?.name}</h3>
                            {e.types.length > 1 ? (
                              <Double>
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[0].type.name}.png`)}
                                  alt="imgType"
                                />
                                <img
                                  className="type"
                                  src={require(`../../image/${e.types[1].type.name}.png`)}
                                  alt="imgType"
                                />
                              </Double>
                            ) : (
                              <img
                                className="type"
                                src={require(`../../image/${e.types[0].type.name}.png`)}
                                alt="imgType"
                              />
                            )}
                            <span>Raridade</span>
                          </div>
                        </Card>
                      )
                    )}
              </Grid>
            </Box>
            <FiltersDiv>
              <span>Tema:</span>
              <BoxTema>
                <div
                  onClick={() => setThemeSelector("var(--red)")}
                  style={{
                    background: "var(--red)",
                    outline: "1px solid black",
                  }}
                ></div>
                <div
                  onClick={() => setThemeSelector("var(--yellow)")}
                  style={{
                    background: "var(--yellow)",
                    outline: "1px solid black",
                  }}
                ></div>
                <div
                  onClick={() => setThemeSelector("var(--blue)")}
                  style={{
                    background: "var(--blue)",
                    outline: "1px solid black",
                  }}
                ></div>
              </BoxTema>
              <span>Nome:</span>
              <BoxInput>
                <AiOutlineSearch />
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                />
              </BoxInput>
              <span>Raridade:</span>
              <BoxRaridade>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  onClick={() => rarityFilter("normal")}
                >
                  Normal
                </div>
                <div
                  style={{ backgroundColor: "#006FC9" }}
                  onClick={() => rarityFilter("raro")}
                >
                  Raro
                </div>
                <div
                  style={{ backgroundColor: "#FBD100" }}
                  onClick={() => rarityFilter("super_raro")}
                >
                  Super Raro
                </div>
                <div
                  style={{
                    backgroundImage: "linear-gradient(#FB89EB, #4C6AB2)",
                  }}
                  onClick={() => rarityFilter("ultra_raro")}
                >
                  Ultra Raro
                </div>
              </BoxRaridade>
              <span>Tipo:</span>
              <BoxTipo>
                <img
                  src={require("../../image/bug.png")}
                  onClick={() => filtroTipo("bug")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/dragon.png")}
                  onClick={() => filtroTipo("dragon")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/electric.png")}
                  onClick={() => filtroTipo("electric")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/fairy.png")}
                  onClick={() => filtroTipo("fairy")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/fighting.png")}
                  onClick={() => filtroTipo("fighting")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/fire.png")}
                  onClick={() => filtroTipo("fire")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/flying.png")}
                  onClick={() => filtroTipo("flying")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/ghost.png")}
                  onClick={() => filtroTipo("ghost")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/grass.png")}
                  onClick={() => filtroTipo("grass")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/ground.png")}
                  onClick={() => filtroTipo("ground")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/ice.png")}
                  onClick={() => filtroTipo("ice")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/normal.png")}
                  onClick={() => filtroTipo("normal")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/poison.png")}
                  onClick={() => filtroTipo("poison")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/psychic.png")}
                  onClick={() => filtroTipo("psychic")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/rock.png")}
                  onClick={() => filtroTipo("rock")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/steel.png")}
                  onClick={() => filtroTipo("steel")}
                  alt="imgType"
                />
                <img
                  src={require("../../image/water.png")}
                  onClick={() => filtroTipo("water")}
                  alt="imgType"
                />
              </BoxTipo>
            </FiltersDiv>
          </Article>
        </Container>
      </Main>
    </>
  );
}

export default UserDash;
