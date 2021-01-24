import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PlusCicle from "../img/Grupo 270.png";
import EnvelopSerie from "../img/_ionicons_svg_md-filing.png";

import TopBar from "../components/TopBar";
import ImgLogoVisa from "../img/visa-logo-17.png";

import Api from "../services/api.json";
import { useAuth } from '../context/Context2';
import { cpfMask } from "./mask";

type Porps = {};

const SolicitarEmprestimo03 = (props: Porps) => {
  const { user, dadosUser } = useAuth()

  const history = useHistory();
  const handleClick = () => history.push('/solicitar_emprestimo04');

  return (
    <React.Fragment>
      <TopBar />
      <Wrapper>
        <ContainerLg>
          <div style={{ display: "grid", width: "100%" }}>
            <DivImg>
              <Img src={PlusCicle} alt="" />
              <Img src={EnvelopSerie} alt="" />
              <div style={{ width: 300 }}>
                <Title>Solicitar Emprestimo</Title>
              </div>
            </DivImg>
            <DivCalculo>
              <DivValueAndButton>
                <DivLeft>
                  <SpanHeadForm>Insira os dados do Cartão:</SpanHeadForm>
                  <Input placeholder="Nome igual no cartão" type="text" name="v" />
                  <DivInput>
                    <DivBase>
                      <div>
                        <InputCard
                          placeholder="Número impresso no cartão"
                          type="text"
                          name="v"
                        />
                      </div>
                      <div style={{ alignItems: "center", display: "flex" }}>
                        <img
                          src={ImgLogoVisa}
                          width={60}
                          height={40}
                          alt="imagem Visa"
                        />
                      </div>
                    </DivBase>
                  </DivInput>
                  <Input placeholder="Data de Validade" type="text" name="c" />
                  <Input placeholder="CVC" type="text" name="f" />
                </DivLeft>
                <DivLeft>
                  <SpanHeadForm>
                    Faça o upload dos anexos do cartão:
                  </SpanHeadForm>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Cartão de Crédito (Frente)</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Cartão de Crédito (Verso)</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Selfie com cartão de crédito</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInfo style={{ background: "white" }}>
                    <div>
                      <p>
                        Atenção: As fotos devem estar legíveis, com todas as
                        informações visíveis do cartão.
                      </p>
                    </div>
                  </DivInfo>
                </DivLeft>
                <div style={{ marginTop: 40 }}>
                  <ButtonValorDesejado
                    onClick={handleClick}
                  >
                    <SpanButtonValorDesejado>Continuar</SpanButtonValorDesejado>
                  </ButtonValorDesejado>
                </div>
              </DivValueAndButton>
            </DivCalculo>
          </div>
        </ContainerLg>
      </Wrapper>
    </React.Fragment>
  );
};

const InputCard = styled.input`
  font: var(--unnamed-font-style-italic) var(--unnamed-font-weight-bold) 18px/24px
    var(--unnamed-font-family-flexo);

  color: var(--unnamed-color-777777);
  text-align: left;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-f8f8f8);

  /* width: 450px; */
  height: 60px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  /* padding-left: 20px; */
`;

const SpanSublinhado = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
const DivBase = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const SpanHeadForm = styled.span`
  font: var(--unnamed-font-style-normal) 18px var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);

  text-align: center;
  margin-bottom: 20px;
`;
const DivLeft = styled.div`
  display: grid;
  width: 50%;
  justify-content: center;
  margin-top: 100px;
`;
const DivInfo = styled.div`
  font: var(--unnamed-font-style-normal) 18px/24px
    var(--unnamed-font-family-flexo);

  color: var(--unnamed-color-228a95);
  text-align: left;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-ffffff);

  width: 450px;
  height: 62px;
  border-radius: 5px;
  margin: 0 0 10px 0;
  align-items: center;
  display: flex;
`;
const DivInput = styled.div`
  font: var(--unnamed-font-style-italic) var(--unnamed-font-weight-bold) 18px/24px
    var(--unnamed-font-family-flexo);

  color: var(--unnamed-color-777777);
  text-align: left;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-f8f8f8);

  /* width: 450px; */
  height: 62px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  display: flex;
`;
const Input = styled.input`
  font: var(--unnamed-font-style-italic) var(--unnamed-font-weight-bold) 18px/24px
    var(--unnamed-font-family-flexo);

  color: var(--unnamed-color-777777);
  text-align: left;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-f8f8f8);

  width: 450px;
  height: 60px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  padding-left: 20px;
`;
const SpanInfo = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-size-18)
    var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: left;
`;
const Divisor = styled.div`
  margin: 20px 0 20px 0;
`;
const SpanDivisor = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-size-25)
    var(--unnamed-font-family-flexo);
  color: var(--unnamed-color-777777);
`;

const SpanButtonValorDesejado = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/30px var(--unnamed-font-family-flexo);
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
  align-items: center;
  display: flex;
  justify-content: left;
`;
const DivCalculo = styled.div`
  /* width: 1000px;  */
  align-items: center;
  display: grid;
  justify-content: center;
`;

const Img = styled.img`
  margin-right: 20px;
`;
const Title = styled.span`
  font: var(--unnamed-font-style-normal) normal normal bold 56px Flexo;
  color: var(--unnamed-color-228a95);
  text-align: left;
  letter-spacing: 0px;
  /* color: #228A95; */
`;

const TitleValorDesejado = styled.span`
  margin-top: 80px;
  margin-bottom: 30px;
  font: var(--unnamed-font-style-normal) var(--unnamed-font-weight-bold) 25px/40px
    var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);
  text-align: center;
`;

const DivValueAndButton = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
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
  border: none !important;
  outline-style: none;
  /* :disabled{
            background: var(--unnamed-color-228a95);
            opacity: 0.4;
            cursor: text;
        } */
`;

export default SolicitarEmprestimo03;
