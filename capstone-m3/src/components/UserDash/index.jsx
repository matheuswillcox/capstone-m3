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

function UserDash({ card, setCard, obj, setObjModal }) {
  const {
    allPokemonsContext,
    themeContext,
    userContext,
    tradesContext,
    rarityContext,
  } = useContext(GlobalContext);

  const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext;

  const { getTrades, trades, setTrades } = tradesContext;

  const { themeSelector, setThemeSelector } = themeContext;

  const { user, userToken } = userContext;

  const { rarity } = rarityContext;

  const [inputText, setInputText] = useState("");

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [filtro, setFiltro] = useState("");

  useEffect(() => {}, [allPokemons, user]);

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
    if (data === "") {
      setFilteredPokemons([]);
    } else {
      const type = rarity[data];
 
      setFilteredPokemons(allPokemons.filter((item) => type.includes(item.id)));
    }
  };

  const filtroTipo = (input) => {
    if (input === "") {
      setFilteredPokemons([]);
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
        <ModalDashBoard
          card={card}
          obj={obj}
          setCard={setCard}
          userPokemon={user}
        />
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
                        <Card
                          raridade={rarity}
                          id={e?.id}
                          key={e?.id}
                          onClick={(event) => {
                            event.preventDefault();
                            setObjModal({ ...e, display: "" });
                            setCard(true);
                          }}
                        >
                          <img src={e?.sprites.front_default} alt="PokeImg" />
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
                            <span>
                              Quantidade x
                              {user.pokemon?.map(({ name }, index) => {
                                if (e?.name === name) {
                                  return user.pokemon[index]?.quantity;
                                }
                              })}
                            </span>
                          </div>
                        </Card>
                      ) : (
                        <Card
                          raridade={rarity}
                          id={e?.id}
                          key={e?.id}
                          color="block"
                          onClick={(event) => {
                            event.preventDefault();
                            setObjModal({ ...e, display: "" });
                            setCard(true);
                          }}
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
                            <span>
                            Não obtido
                            </span>
                          </div>
                        </Card>
                      )
                    )
                  : allPokemons?.map((e) =>
                      user.pokemon?.filter(({ name }) => {
                        return e?.name === name;
                      }).length > 0 ? (
                        <Card
                          raridade={rarity}
                          id={e?.id}
                          key={e?.id}
                          onClick={(event) => {
                            event.preventDefault();
                            setObjModal({ ...e, display: "" });
                            setCard(true);
                          }}
                        >
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
                            <span>
                              Quantidade x
                              {user.pokemon?.map(({ name }, index) => {
                                if (e?.name === name) {
                                  return user.pokemon[index]?.quantity;
                                }
                              })}
                            </span>
                          </div>
                        </Card>
                      ) : (
                        <Card
                          raridade={rarity}
                          id={e?.id}
                          key={e?.id}
                          color="block"
                          onClick={(event) => {
                            event.preventDefault();
                            setObjModal({ ...e, display: "block" });
                            setCard(true);
                          }}
                        >
                          <img
                            color="block"
                            img={card}
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
                            <span>Não obtido</span>
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
                  style={{ backgroundColor: "#FFFFFF" }}
                  onClick={() => rarityFilter("")}
                >
                  Todos
                </div>
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
