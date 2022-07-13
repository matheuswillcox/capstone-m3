import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.display === "true" ? "flex" : "none"};
    position: fixed;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
`
export const Card = styled.div`
display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  background: ${props => props.color === "block" ? "darkgray" : "#FFFFFF"};
  border: ${props => props.raridade < 100 ? "5px solid #d9d9d9" : props.raridade >= 100 && props.raridade < 151 ? "5px solid #006FC9": props.raridade >= 151 && props.raridade < 251 ? "5px solid #FBD100":"5px solid #FB89EB"};
  border-radius: 4px;
  align-items: center;
  transition: 3s ease-in;

  img {
    width: 182.5px;
    height: 181.6px;
    margin: 0px;
    background: #FFFFFF;
    background: ${props => props.color === "block" ? "darkgray" : "#FFFFFF"};
  }
  .type {
    width: 30px;
    height: 30px;
    margin: 0px;
    background: ${props => props.color === "block" ? "darkgray" : "#FFFFFF"};
  }
  h3 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
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
    margin-left: 35px;
    gap: 10px;
  }

  p{
    font-weight: 800;
    margin: 2px;
  }
`

export const ButtonDismont = styled.button`
    width: 200px;
    height: 53px;
    background-color: ${props=>props.theme};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    cursor: pointer;

    :disabled{
        background: darkgray;
        cursor: auto;
    }
`

export const Trash = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    width: 241px;
    height: 0px;
    margin: 15px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    `
    export const Double = styled.section`
    display:flex;
    flex-direction: row;
    flex-flow: row wrap;
    width:180px;
  `;