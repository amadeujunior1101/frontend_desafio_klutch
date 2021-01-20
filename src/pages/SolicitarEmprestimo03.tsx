import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlusCicle from '../img/Grupo 270.png';
import  EnvelopSerie from '../img/_ionicons_svg_md-filing.png';

import TopBar from '../components/TopBar';

import Api from '../services/api.json'
import { cpfMask } from './mask';

type Porps = {

}

const SolicitarEmprestimo03 = (props: Porps) => {

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
                        <div style={{display: 'flex', width: 1000}}>
                            <span style={{width: '100%', background: 'red', textAlign: 'center'}}>Insira os dados do Cartão:</span>
                            <span style={{width: '100%', background: 'green', textAlign: 'center'}}>Faça o upload dos anexos do cartão:</span>                           
                        </div>
                        <DivValueAndButton>
                            
                            <Input 
                                        placeholder="Lara B Esquivel"
                                        type="text" 
                                        name="v"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="Cartão de Crédito (Frente)"
                                        type="text" 
                                        name="c"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="000000000000"
                                        type="text" 
                                        name="c"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="Cartão de Crédito (Verso)"
                                        type="text" 
                                        name="f"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="Data de Validade"
                                        type="text" 
                                        name="d"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="Selfie com cartão de crédito"
                                        type="text" 
                                        name="Sg"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                            <Input 
                                        placeholder="CVC"
                                        type="text" 
                                        name="S"
                                        //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                        //     //  const newValue = e.currentTarget.value;
                                            
                                        //  }}
                                        // onChange={handleChange}
                                        // value={inputValue}
                            />
                        </DivValueAndButton>
                    </DivCalculo>
                </div>
            </ContainerLg>
        </Wrapper>  
        </React.Fragment>
    );
};

const Input = styled.input`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/24px var(--unnamed-font-family-flexo);
    
    color: var(--unnamed-color-777777);
    text-align: center;
    border-width:0px;
    border:none;
    box-shadow: none;
    outline:none!important;
    background: var(--unnamed-color-f8f8f8) ;

    width: 450px;
    height: 60px;
    border-radius: 5px;
    margin: 0 5px 20px 5px;
`;
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
    /* width: 1000px;  */
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
   display: flex;
   align-items: center;
   text-align: center;
   flex-wrap: wrap; 
   justify-content: space-between;
   width: 1000px;
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

export default SolicitarEmprestimo03;