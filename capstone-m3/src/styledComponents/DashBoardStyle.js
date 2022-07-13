import styled from "styled-components";


export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props=>props.theme};
  justify-content: flex-start;
  height: 100%;
  width: 100vw;
  gap: 160px;
  
`;

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-family: "Roboto",sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
  }
  @media(max-width: 400px){
    height: 100vh;
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: row;
  

  @media(max-width: 400px){
    flex-direction: column;
    height: 85%;
  }

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 880px;
  height: 580px;
  background: #ffffff;
  border-radius: 15px;
  overflow-y: auto;
  margin-left:200px;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  @media(max-width: 400px){
    height: 430px;
    width: 290px;
    margin-left: 40px;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  overflow-y: scroll;
  gap: 20px;
  margin: 15px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  @media(max-width: 400px){
    flex-flow: row;
    height:380px;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 15px 15px 15px 15px;
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 250px;
  text-transform: capitalize;
  background: ${props => props.color === "block" ? "darkgray" : "#FFFFFF"};

  border: ${(props) => {
    const isNormal = props.raridade?.normal?.find((item) => item === props.id);
    const isRares = props.raridade?.raro?.find((item) => item === props.id);
    const isSuperRares = props.raridade?.super_raro?.find(
      (item) => item === props.id
    );
    return isNormal
      ? "5px solid #D9D9D9"
      : isRares
      ? "5px solid #006FC9"
      : isSuperRares
      ? "5px solid #FBD100"
      : "5px solid #FB89EB";
  }};
  //box-shadow: ${props=> props.raridade.ultra_raro.find(id => id === !props.id) ? "none":"0px 0px 4px 5px rgba(93,32,158,1)"};
  border-radius: 4px;
  align-items: center;
  margin: 11px;
  cursor: pointer;
  img {
    width: 132.5px;
    height: 131.6px;
    margin: 10px;
  }
  .type {
    width: 30px;
    height: 30px;
    margin: 0px;
  }
  h3 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin: 0px;
  }
  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #000000;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: inherit;
    margin-left: 20px;
    gap: 8px;
    margin-top: 10px;
  }
`;

export const Double = styled.section`
  display:flex;
  flex-direction: row;
  flex-flow: row wrap;
  width:180px;
`;

export const FiltersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 25px;
  height: 555px;
  span {
    font-family: "Roboto",sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  @media(max-width: 400px){
    width: 350px;
    height: 400px;
    margin-top:10px;
    gap:15px;
    span{
      display: none;
    }
  }
`;

export const BoxTema = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  cursor: pointer;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 3px 3px 5px black;
  }
  div:hover{
    transform: scale(1.1);
    transition: .4s;
  }
  @media(max-width: 400px){
    div{
      width: 30px;
      height: 30px;
    }
  }
`;

export const BoxRaridade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 35px;
  gap: 8px;
  div {
    width: 120px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    cursor: pointer;
  }
  @media(max-width: 400px){
    display: flex;
    flex-direction: row;
    height:40px;
    width:350px;
    overflow-x: scroll;
  }
`;
export const BoxTipo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
  width: 250px;
  max-height: 350px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 63px;
    height: 63px;
    cursor: pointer;
  }
  @media(max-width: 400px){
    display: flex;
    flex-direction: row;
    height:85px;
    width:350px;
    overflow-x: scroll;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 153px;
  background-color: #ffffff;
  border-radius: 26px;
  input {
    width: 123px;
    height: 22px;
    background: #ffffff;
    border: none;
    :focus {
      outline: none;
    }
  }
  @media(max-width: 400px){
    width:300px;
    input{
      width: 250px;
    }
  }
`;
