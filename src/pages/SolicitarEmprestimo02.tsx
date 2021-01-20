import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlusCicle from '../img/Grupo 270.png';
import  EnvelopSerie from '../img/_ionicons_svg_md-filing.png';

import TopBar from '../components/TopBar';

import Api from '../services/api.json'
import { cpfMask } from './mask';

type Porps = {

}

const SolicitarEmprestimo02 = (props: Porps) => {

    const search =()=>{
       
    }

    return (
        <React.Fragment>
        <TopBar />
        <Wrapper>
            <ContainerLg>
                <div style={{display: 'grid', width: '100%'}}>
                    <DivImg>
                        <Img src={PlusCicle} alt=""/>    
                        <Img src={EnvelopSerie} alt=""/>
                        <div style={{width: 300}}>
                        <Title>Solicitar Emprestimo</Title>
                        </div>
                    </DivImg>
                    <DivCalculo>
                        <TitleValorDesejado>Escolha a modalidade</TitleValorDesejado>
                        <DivValueAndButton>
                            <ButtonValorDesejado onClick={(event: React.MouseEvent<HTMLElement>) =>search()}>
                                <SpanButtonValorDesejado>
                                    Cartão de Crédito
                                </SpanButtonValorDesejado>
                            </ButtonValorDesejado>
                            <Divisor>
                                <SpanDivisor>Ou</SpanDivisor>
                            </Divisor>
                            <ButtonValorDesejado onClick={(event: React.MouseEvent<HTMLElement>) =>search()} disabled={true}>
                                <SpanButtonValorDesejado>
                                    Crédito Consignado
                                </SpanButtonValorDesejado>
                            </ButtonValorDesejado>
                                <SpanInfo style={{textAlign: 'right'}}>Em breve</SpanInfo>
                        </DivValueAndButton>
                    </DivCalculo>
                </div>
            </ContainerLg>
        </Wrapper>  
        </React.Fragment>
    );
};

const SpanInfo = styled.span`
    font: var(--unnamed-font-style-normal) normal  var(--unnamed-font-size-18) var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-777777);
    text-align: left;
`;  
const Divisor= styled.div`
    margin: 20px 0 20px 0;
`;
const SpanDivisor= styled.span`
    font: var(--unnamed-font-style-normal) normal  var(--unnamed-font-size-25) var(--unnamed-font-family-flexo);
    color: var(--unnamed-color-777777);
`;

const SpanButtonValorDesejado = styled.span`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 30px/30px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
`;

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-background-white);
  justify-content: center;
  align-items: center;
  display: flex;  
`;

const ContainerLg = styled.div`
    width: 100%; 
    max-width: 1140px;
    justify-content: center; 
    display: flex; 
    align-items: center;
    margin-bottom: 100px;
    /* background: red; */
    /* border: 1px solid black; */
`;
const DivImg = styled.div`
margin-top: 50px;   
    width: 100%;
    align-items: center ; 
    display: flex;
    justify-content: left;
`;
const DivCalculo = styled.div`
    /* width: 390px;  */
    align-items: center ; 
    display: grid;
    justify-content: center;
`;

const Img= styled.img`
    margin-right: 20px;
`;
const Title = styled.span`
    font: var(--unnamed-font-style-normal)  normal normal bold 56px Flexo;
    color: var(--unnamed-color-228a95);
    text-align: left;
    letter-spacing: 0px;
    /* color: #228A95; */
`;

const TitleValorDesejado = styled.span`
    margin-top: 80px;
    margin-bottom: 30px;
    font: var(--unnamed-font-style-normal) var(--unnamed-font-weight-bold) 25px/40px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-228a95);
    text-align: center;
`;

const DivValueAndButton = styled.div`
   display: grid;
   align-items: center;
   text-align: center;
`;

const ButtonValorDesejado = styled.button`
   width: 300px;
   height: 54px;
   display: flex;
    align-items: center;
    justify-content: center;
    background: var(--unnamed-color-228a95);
    border-radius: 5px;
    cursor: pointer;
    border:none!important;
    outline-style: none;
        :disabled{
            background: var(--unnamed-color-228a95);
            opacity: 0.4;
            cursor: text;
        }
`;

export default SolicitarEmprestimo02;