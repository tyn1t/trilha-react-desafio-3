import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `

export const Wrapper = styled.div`
    max-width: 300px;
    margin-left: 30%;
    
`  

export const Column = styled.div`
    flex: 1;
    
    
`
export const  Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 100%;
    margin-bottom: 155px;
    line-height: 43.58px;

    color: #FFFFFF;
`
export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20;
    line-height: 43.58px;
`
export const Texto = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24.51px;
`
export const SubTexto = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
`
export const FazerLogin = styled.a`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 24.51px;

    color: #23DD7A;
`