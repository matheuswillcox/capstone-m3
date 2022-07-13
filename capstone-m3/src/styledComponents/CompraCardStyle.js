import styled from "styled-components"

export const Container = styled.div`
    width: 370px;
    height: 345px;
    background-color: #ffffff;
    padding: 20px 0;
    color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    border-radius: 4px;
    box-shadow: 0 0 1em black;
    font-family: "Roboto",sans-serif;
`
export const Botoes = styled.div`
    width: 200px;
    display:flex;
    justify-content: space-between;
    &>button{
      background-color: #FE0000;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 8px;
      cursor:pointer
    }
    &>button:hover{
      transform: scale(1.1);
      transition: .4s;
    }
    
`

export const ModalPokemons = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  ul{
    background-color: #fff;
    width: 70%;
    max-width: 1000px;
    height: 80%;
    max-height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    gap: 20px;
    padding-top: 20px;
    overflow-y: scroll;
    border-radius: 20px;
    animation: animation 1s ;
    box-shadow: 0px 2px 10px 5px #000;
  }
  ul::-webkit-scrollbar {
      width: 5px;
  }
  ul::-webkit-scrollbar-track{
      background: none;
      
  }
  ul::-webkit-scrollbar-thumb{
      background: linear-gradient(#fff,blue, #000);
      border-radius: 15px;
  }
  ul li{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid #000;
    box-shadow: 0px 2px 10px 0px #000;
    width: 100%;
    max-width: 160px;
    max-height: 200px;
    border-radius: 15px;
    color: #000;
    gap: 20px;
  }
  ul li figure{
    margin: 0;
    display: flex;
    justify-content: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 60%;
    background: linear-gradient(180deg,#008dff 10%, #00ffb9 90%);
  }
  ul li div{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  button{
    cursor: pointer;
    color: #fff;
    background: none;
    border: 0px;
    position: absolute;
    border-radius: 50%;
    right: 0;
    top: 0;
    margin-top: 10px;
    margin-right: 10px;
    box-shadow: 0 0 0 2px #fff;
  }
  ul li span{
    text-transform: capitalize;
    font-family: "Inter";
  }
  @keyframes animation {
    from{
      //opacity: 0;
      transform: scale(0.1) ;
    }
    to{
      //opacity: 1;
      transform: scale(1) ;
    }
    
  }
`