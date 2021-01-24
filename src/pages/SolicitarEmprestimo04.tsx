import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components";
import PlusCicle from "../img/Grupo 270.png";
import EnvelopSerie from "../img/_ionicons_svg_md-filing.png";

import TopBar from "../components/TopBar";

import Api from "../services/api.json";
import { useAuth } from '../context/Context2';
import { cpfMask } from "./mask";

import IconChecked from "../img/_ionicons_svg_ios-checkmark.png";

type Porps = {};

const SolicitarEmprestimo04 = (props: Porps) => {
  const { user, dadosUser, pedidoEmprestimo, createSolicitation } = useAuth()

  // const [valDesejado, setvalDesejado] = useState(pedidoEmprestimo)

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

  // const { id } = useParams()

  const history = useHistory();
  const handleClick = () => {

    let data = new Date();
    let numAleatorio = Math.floor(1000 * Math.random())
    let numWithDate = numAleatorio + "" + Number(data);

    interface Solicitations {
      id?: number,
      clientId?: number,
      installmentInterest?: number,  /*comment1: Juros parcelados*/
      installmentInterestValue?: number, /*comment2: Valor de juros parcelado*/
      comission?: number,
      comissionValue?: number,
      installmentValue?: number, /*comment3: Valor da parcela*/
      cardNumber?: string,
      desiredValue?: number, /*comment4: Valor desejado*/
      totalLoan?: number, /*comment5: Empréstimo total*/
      installmentId?: number, /*comment6: Id de parcelamento*/
      rateTableId?: number, /*comment7": "Tabela de taxas"*/
    }

    let objSolicitations: Solicitations = {
      id: Number(numWithDate),
      clientId: user?.id,
      installmentInterest: pedidoEmprestimo?.jurosParcelas,  /*comment1: Juros parcelados*/
      installmentInterestValue: 1, /*comment2: Valor de juros parcelado*/
      comission: pedidoEmprestimo?.comissao,
      comissionValue: 1,
      installmentValue: 1, /*comment3: Valor da parcela*/
      cardNumber: "Num cartão",
      desiredValue: pedidoEmprestimo?.valorDesejado, /*comment4: Valor desejado*/
      totalLoan: 1, /*comment5: Empréstimo total*/
      installmentId: 1, /*comment6: Id de parcelamento*/
      rateTableId: pedidoEmprestimo?.idTabela, /*comment7": "Tabela de taxas"*/
    }

    // console.log("Solicitação");
    // console.log(objSolicitations);
    createSolicitation(objSolicitations)
    history.push(`/solicitar_emprestimo05/${Number(numWithDate)}`)
  };

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
                <Img src={PlusCicle} alt="" width={50} height={60} />
                <Img src={EnvelopSerie} alt="" />
                <div style={{ width: 300 }}>
                  <Title>Solicitar Emprestimo</Title>
                </div>
              </div>
              <DivBaseSelectTop>
                <DivTitleSelect>
                  <SpanSelect>Tabela</SpanSelect>
                </DivTitleSelect>
                <DivSelect>
                  <Select name="" id="">
                    <SelectOption value="tabela">Tabela Padrão</SelectOption>
                    <SelectOption value="tabela">Tabela Especial</SelectOption>
                  </Select>
                </DivSelect>
              </DivBaseSelectTop>
            </DivImg>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 40,
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
                    <SpanSelect>Valor desejado:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="" type="text" name="valor_desejado" value={pedidoEmprestimo?.valorDesejado} disabled={true} />
                    {/* <Select name="" id="" >
                                            <SelectOption value="tabela">R$1.000,00</SelectOption>
                                        </Select> */}
                  </DivSelect >
                </DivBaseSelectTop2 >
                <DivBaseSelectTop2>
                  <DivTitleSelect>
                    <SpanSelect>Parcelas:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Select name="" id="">
                      <SelectOption value="tabela">1</SelectOption>
                      <SelectOption value="tabela">2</SelectOption>
                    </Select>
                  </DivSelect>
                </DivBaseSelectTop2>
              </div >
              <div
                style={{
                  width: "100%",
                  justifyContent: "flex-end",
                  display: "grid",
                }}
              >
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Valor Total do Empréstimo:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="" type="text" name="v" />
                    {/* <Select name="" id="" >
                                            <SelectOption value="tabela">R$1.000,00</SelectOption>
                                        </Select> */}
                  </DivSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2>
                  <DivTitleSelect>
                    <SpanSelect>Valor da parcela:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="" type="text" name="v" />
                  </DivSelect>
                </DivBaseSelectTop2>
              </div>
            </div >
            <SpanTipoContrato>Escolha o tipo de contrato:</SpanTipoContrato>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div style={{ width: "100%", display: "flex", paddingRight: 20 }}>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                >
                  <SpanButtonValorDesejado>Automático</SpanButtonValorDesejado>
                </ButtonValorDesejado>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                  disabled={true}
                  style={{ background: "#ffffff" }}
                >
                  <SpanButtonValorDesejado style={{ color: "#228a95" }}>
                    Manual
                  </SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </div>
              <div style={{ width: "100%", display: "grid", paddingLeft: 20 }}>
                <ButtonValorDesejado
                  onClick={handleClick}
                >
                  <img
                    src={IconChecked}
                    width={25}
                    height={25}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  <SpanButtonValorDesejado>Concluir</SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </div>
            </div>

            <div>
              <DivTable>
                {rateTable.map((item) => (
                  <React.Fragment key={item.id}>
                    <TitleNameTable>{item.name}</TitleNameTable>
                    <div style={{ display: "flex" }}>
                      <Table>
                        <tr>
                          <TableColTitle>Parcela</TableColTitle>
                          <TableColTitle>Juros da Parcela</TableColTitle>
                          <TableColTitle>Valor Parcela</TableColTitle>
                          <TableColTitle>Valor Total</TableColTitle>
                          <TableColTitle>Comissão Parceiro</TableColTitle>
                        </tr>

                        {item.installments.map((item2) => (
                          <tr>
                            <TableColItem>{item2.installments}</TableColItem>
                            <TableColItem>
                              {item2.installmentInterest}%
                            </TableColItem>
                            <TableColItem>
                              R${item2.installmentValue}
                            </TableColItem>
                            <TableColItem>R${item2.fullValue}</TableColItem>
                            <TableColItem>R${item2.comission}</TableColItem>
                          </tr>
                        ))}
                      </Table>
                    </div>
                  </React.Fragment>
                ))}
              </DivTable>
            </div>
          </div >
        </ContainerLg >
      </Wrapper >
    </React.Fragment >
  );
};

const SpanTipoContrato = styled.span`
  font: var(--unnamed-font-style-normal) 21px/24px
    var(--unnamed-font-family-flexo);

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
`;
const SpanSelect = styled.span`
  font: var(--unnamed-font-style-italic) normal var(--unnamed-font-weight-bold)
    16px/30px var(--unnamed-font-family-flexo);
  color: var(--unnamed-color-228a95);
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

export default SolicitarEmprestimo04;
