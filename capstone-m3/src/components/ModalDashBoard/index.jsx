import {
  ButtonDismont,
  Card,
  Container,
  Trash,
  Double,
} from "../../styledComponents/ModalDashBoard";
import API from "../../services/api";
import { toast } from "react-toastify";
import { GlobalContext } from "../../providers/global";
import { useContext } from "react";

const ModalDashBoard = ({ obj, userPokemon, setCard, card }) => {
  const { themeContext, userContext, rarityContext } =
    useContext(GlobalContext);
  const { themeSelector } = themeContext;
  const { rarity } = rarityContext;
  const { setUser } = userContext;

  const pokemonFind = userPokemon?.pokemon.filter((e) => e.name === obj?.name);

  const pokemonObjFilter = userPokemon?.pokemon.filter(
    (e) => e.name !== obj?.name
  );

  const desmontar = {
    credits: userPokemon?.credits + 50,
    pokemon: [
      ...pokemonObjFilter,
      { name: obj?.name, quantity: pokemonFind[0]?.quantity - 1 },
    ],
  };

  const handleSubmit = () => {
    API.patch(`/users/${localStorage.getItem("userID")}`, desmontar, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@pokemonUser", JSON.stringify(res.data));
        toast.success("Desmontada Com Sucesso");
        setTimeout(() => {
          setCard(false);
        }, 1500);
      })

  };

  return (
    <Container display={String(card)}>
      <Card
        key={obj?.id}
        raridade={rarity}
        id={obj?.id}
        color={ obj?.quantity === 0 && "block"}
  
      >
        <Trash
          onClick={(e) => {
            e.preventDefault();
            setCard(false);
          }}
        >
          X
        </Trash>
        <img src={obj?.sprites.front_default} alt="" />
        <div>
          <h3>{obj?.name}</h3>
          {obj?.types?.length > 1 ? (
        
            <Double>
              <img
                className="type"
                src={
                  obj && require(`../../image/${obj?.types[0]?.type.name}.png`)
                }
                alt="imgType"
              />
              <img
                className="type"
                src={
                  obj && require(`../../image/${obj?.types[1].type.name}.png`)
                }
                alt="imgType"
              />
            </Double>
          ) : (
            <img
              className="type"
              src={obj && require(`../../image/${obj?.types[0].type.name}.png`)}
              alt="imgType"
            />
          )}
          <p>
            {pokemonFind[0]?.quantity ? `${pokemonFind[0].quantity}` : "0"}X
          </p>
        </div>
      </Card>
      <ButtonDismont
        theme={themeSelector}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        disabled={
          userPokemon?.pokemon.filter(
            (e) => e.name === obj?.name && e.quantity > 1
          ).length > 0
            ? false
            : true
        }
      >
        Desmontar
      </ButtonDismont>
    </Container>
  );
};

export default ModalDashBoard;
