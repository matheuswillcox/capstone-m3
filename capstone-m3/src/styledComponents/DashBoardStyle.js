import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    background: red;
    justify-content: center;
    height: 100vh;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        color: #FFFFFF;
    }
`

export const Article = styled.div`
    display: flex;
    flex-direction: row;
   
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 884px;
    height: 580px;
    background: #FFFFFF;
    border-radius: 15px;
    overflow: auto;
::-webkit-scrollbar {
    width: 0px;
}
 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: 350px;
    margin: 15px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 250px;
    background: #FEFFFC;
    border: 5px solid #D9D9D9;
    border-radius: 4px;
    align-items: center;
    img{
        width: 132.5px;
        height: 131.6px;
        margin: 10px;
    }
    .type{
        width: 30px;
        height: 30px;
        margin: 0px;
    }
    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin: 0px;
    }
    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 13px;
        color: #000000;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: inherit;
        margin-left: 20px;
        gap: 8px;
        margin-top: 10px;
    }
`
export const FiltersDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 20px;
    height: 555px;
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
    }
`

export const BoxTema = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const BoxRaridade = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 35px;
    gap: 8px;
    div{
        width: 120px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        cursor: pointer;
    }
`
export const BoxTipo = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 80px;
    width: 250px;
    max-height: 350px;
    overflow: auto;
::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
    img{
        width: 63px;
        height: 63px;
        cursor: pointer;
    }
`

export const BoxInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 153px;
    background-color: #FFFFFF;
    border-radius: 26px;
    input{
        width: 123px;
        height: 22px;
        background: #FFFFFF;
        border: none;
        :focus{
            outline: none;
        }
    }
`