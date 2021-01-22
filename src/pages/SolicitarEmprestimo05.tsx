import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlusCicle from "../img/Grupo 270.png";
import EnvelopSerie from "../img/_ionicons_svg_md-filing.png";

import TopBar from "../components/TopBar";

import Api from "../services/api.json";
import { cpfMask } from "./mask";

import IconChecked from "../img/_ionicons_svg_ios-checkmark.png";
import { FaCheck } from "react-icons/fa";
import ImgLogoVisa from "../img/visa-logo-17.png";

type Porps = {};

const SolicitarEmprestimo05 = (props: Porps) => {
    interface RatetableModel {
        id: number;
        name: string;
        default: boolean;
        installments: [
            {
                id: number;
                installments: number;
                installmentInterest: number;
                installmentValue: number;
                fullValue: number;
                comission: number;
            }
        ];
    }

    const [rateTable, setRateTable] = useState<RatetableModel[]>([]);
    const search = () => { };
    const searchTable = () => {
        // const data:object = Api.rateTable[0];
        let arr = [Api.rateTable[0]];

        setRateTable(Object(arr));
        console.log(arr);
    };

    useEffect(() => {
        searchTable();
    }, []);
    return (
        <React.Fragment>
            <TopBar />
            <Wrapper>
                <ContainerLg>
                    <div style={{ display: "grid", width: "100%" }}>
                        <DivImg>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Img src={PlusCicle} alt="" width={50} height={58} />
                                <Img src={EnvelopSerie} alt="" />
                                <div style={{ width: 300 }}>
                                    <Title>Solicitar Emprestimo</Title>
                                </div>
                            </div>
                        </DivImg>

                        <SpanHeadForm>Solicitação Realizada com Sucesso!</SpanHeadForm>

                        <SpanTipoContrato2>Resumo da Solicitação</SpanTipoContrato2>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: 20,
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    display: "grid",
                                }}
                            >
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanName>João Paulo Guedes</SpanName>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#777777" }}>
                                            71 9988-7766
                                    </SpanSelect>
                                        {/* <img src={IconChecked} alt="" width={30} height={30} /> */}
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <img src={ImgLogoVisa} width={60} height={40} alt="" />
                                        <SpanSelect style={{ marginLeft: 10 }}>4327</SpanSelect>
                                        <SpanSelect style={{ color: "#484646" }}>VISA</SpanSelect>
                                        <SpanSelect>02/10</SpanSelect>
                                    </DivTitleSelect>

                                    <DivTitleSelect>
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanSelect>Valor desejado:</SpanSelect>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                                            R$ 7.200,00
                    </SpanSelect>
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    justifyContent: "flex-end",
                                    display: "grid",
                                }}
                            >
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanSelect>Taxa de Juros</SpanSelect>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#ef9c4b", fontSize: 20 }}>
                                            12%
                    </SpanSelect>
                                        {/* <img src={IconChecked} alt="" width={30} height={30} /> */}
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanSelect>Parcelas:</SpanSelect>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#ef9c4b", fontSize: 20 }}>
                                            12
                    </SpanSelect>
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanSelect>Valor da parcela:</SpanSelect>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                                            R$ 433,00
                    </SpanSelect>
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                justifyContent: "center",
                                textAlign: "center",
                                marginTop: 20,
                            }}
                        >
                            <div style={{ width: 500, display: "flex" }}>
                                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                                    <DivTitleSelect>
                                        <SpanSelect>Valor total do empréstimo:</SpanSelect>
                                    </DivTitleSelect>
                                    <DivTitleSelect>
                                        <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                                            R$ 7.200,00
                    </SpanSelect>
                                        <FaCheck color={"#228A95"} size={20} />
                                    </DivTitleSelect>
                                </DivBaseSelectTop2>
                            </div>
                            <div style={{ width: 500, display: "flex" }}>
                                <ButtonValorDesejado
                                    onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                                >
                                    <SpanButtonValorDesejado>
                                        Detalhe da Solicitação
                  </SpanButtonValorDesejado>
                                </ButtonValorDesejado>
                            </div>
                            <SpanTipoContrato>
                                O CredFica avaliará a solicitação.
              </SpanTipoContrato>
                        </div>
                        <div></div>
                    </div>
                </ContainerLg>
            </Wrapper>
        </React.Fragment>
    );
};

const SpanHeadForm = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    40px/55px var(--unnamed-font-family-flexo);

  /* font: var(--unnamed-font-style-normal)  18px var(--unnamed-font-family-flexo); */
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);

  text-align: center;
  /* margin-bottom: 20px; */
  margin-top: 40px;
`;

const SpanTipoContrato = styled.span`
  font: var(--unnamed-font-style-normal) 21px/24px
    var(--unnamed-font-family-flexo);
  margin: 20px 0 20px 0;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);
  text-align: center;
`;

const SpanTipoContrato2 = styled.span`
  font: var(--unnamed-font-style-normal) 21px/24px
    var(--unnamed-font-family-flexo);
  margin: 20px 0 0 0;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);
  text-align: left;
`;
const Input = styled.input`
  font: var(--unnamed-font-style-italic) var(--unnamed-font-weight-bold) 18px/24px
    var(--unnamed-font-family-flexo);

  color: var(--unnamed-color-ef9c4b);
  text-align: center;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-ffffff);

  width: 200px;
  height: 60px;
  border-radius: 5px;
  /* margin: 10px 0  10px 0; */
  padding: 0 20px 0 20px;
`;
const SelectOption = styled.option`
  /* color: var(--unnamed-color-ef9c4b); */
  font-size: 22px;
  background: var(--unnamed-color-ffffff);
`;
const Select = styled.select`
  color: var(--unnamed-color-ef9c4b);
  padding: 0 10px 0 10px;
  width: 240px;
  height: 62px;
  font: var(--unnamed-font-style-italic) normal var(--unnamed-font-weight-bold)
    22px/30px var(--unnamed-font-family-flexo);
  background: var(--unnamed-color-ffffff);

  border: none;
  box-shadow: none;
  outline: none !important;
`;
const DivSelect = styled.div`
  align-items: center;
  display: flex;
  height: 96;
  margin-right: 20px;
  /* margin-bottom: 20px; */
  padding: 20px 0 20px 20px;
`;
const DivTitleSelect = styled.div`
  margin: 0 40px 0 30px;
  align-items: center;
  display: flex;
  /* justify-content: space-evenly; */
`;
const SpanName = styled.span`
  font: var(--unnamed-font-style-italic) normal var(--unnamed-font-weight-bold)
    16px/30px var(--unnamed-font-family-flexo);
  color: var(--unnamed-color-777777);
  margin-right: 10px;
`;
const SpanSelect = styled.span`
  font: var(--unnamed-font-style-italic) normal var(--unnamed-font-weight-bold)
    16px/30px var(--unnamed-font-family-flexo);
  color: var(--unnamed-color-228a95);
  margin-right: 10px;
`;
const DivBaseSelectTop = styled.div`
  background: var(--unnamed-color-f8f8f8);
  border-radius: 5px;
  display: flex;
  width: 472px;
  justify-content: space-between;
`;
const DivBaseSelectTop2 = styled.div`
  background: var(--unnamed-color-f8f8f8);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 20px;
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
  justify-content: space-between;
`;
const DivCalculo = styled.div`
  /* width: 390px;  */
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
  display: grid;
  align-items: center;
  text-align: center;
`;

const ButtonValorDesejado = styled.button`
  width: 100%;
  height: 80px;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  width: 100%;
`;
const TableColTitle = styled.th`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    25px/33px var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;

  border: 1px solid #dddddd;
  padding: 8px;
`;
const TableColItem = styled.td`
  font: var(--unnamed-font-style-normal) normal normal 23px/31px
    var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;

  border: 1px solid #dddddd;
  padding: 8px;
`;
const TitleNameTable = styled.div`
  margin: 30px auto 30px auto;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    29px/38px var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);
  text-align: center;
`;
const DivTable = styled.div`
  margin-top: 50px;
  width: 100%;
  /* height: 128px; */
  background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
  justify-content: center;
`;

export default SolicitarEmprestimo05;
