import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import PlusCicle from "../img/Grupo 270.png";
import EnvelopSerie from "../img/_ionicons_svg_md-filing.png";

import TopBar from "../components/TopBar";

import Api from "../services/api.json";
import { useAuth } from '../context/Context2';

type Porps = {};

const SimularTaxas01 = (props: Porps) => {
  const { dadosEmprestimo, pedidoEmprestimo } = useAuth()
  const [arr, setArr] = useState(pedidoEmprestimo)
  const [loading, setLoading] = useState(true)

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

  interface tableModel {
    default: boolean;
  }

  const [inputValue, setInputValue] = useState("");
  const [activeBar, setActiveBar] = useState(false);
  const [lineId, setLineId] = useState(0);
  const [selectTable, setSelectTable] = useState(0);
  const [rateTable, setRateTable] = useState<RatetableModel[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.currentTarget.value)
    setInputValue(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setActiveBar(false);
    }
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
    // setInputValue(e.currentTarget.value);
    let item = {
      default: Boolean
    }

    setSelectTable(Number(e.currentTarget.value))
  };

  const calcular = () => {
    if (inputValue === "") {
      console.log("Informe um valor");
    } else if (Number(inputValue) < 300) {
      console.log("menor que 300");
    } else if (Number(inputValue) > 10000) {
      console.log("maior que 10000");
    } else {
      console.log("valor permitido para emprestimos");
      // console.log(Api.rateTable)
      const data: object = Api.rateTable;

      console.log(data);
      setRateTable(Object(Api.rateTable));
    }
  };
  const activeLineTable = {
    cursor: "pointer",
    background: "#EFDF4B",
  };
  const noActiveLineTable = {
    cursor: "pointer",
    background: "#f8f8f8",
  };

  interface item {
    id: number;
    installments: number;
    installmentInterest: number;
    installmentValue: number;
    fullValue: number;
    comission: number;
  }
  interface tableData2 {
    tableName: string;
    installmentsNumber: number;
    installmentValue: number;
  }

  const selectTableLine = (item: item, item2: RatetableModel) => {
    // setLineColor(true);
    // console.log("Os itens");
    // console.log(item);

    setLineId(item.id);
    setSelectTable(item2.id);
    // setTableData(item2)
    const { name } = item2

    // const obj:tableData = {
    //   tableName: item2.name,
    //   installmentsNumber: item.installmentInterest,
    //   installmentValue: item.installmentValue,
    // }
    interface Emprestimo {
      idTabela: number,
      nameTabela: string,
      quantParcelas: number,
      valorParcelas: number,
      jurosParcelas: number,
      comissao: number,
      valorDesejado: number,
    }

    let obj: Emprestimo = {
      idTabela: item2.id,
      nameTabela: item2.name,
      quantParcelas: item.installments,
      valorParcelas: item.installmentValue,
      jurosParcelas: item.installmentInterest,
      comissao: item.comission,
      valorDesejado: Number(inputValue)
    }

    dadosEmprestimo(obj);
    setArr(obj);
    setActiveBar(true);
    setLoading(false);
    // console.log("Dados")
    // console.log(pedidoEmprestimo)
    // setName(item2.name)
    // console.log("Nome")
    // console.log(name)
  };

  const teste = (item: tableModel) => {
    if (item.default === true) {
      return true;
    } else {
      return false;
    }
  };

  const history = useHistory();
  const handleClick = () => history.push('/solicitar_emprestimo01');

  return (
    <React.Fragment>
      <TopBar />
      <Wrapper>
        <ContainerLg>
          <DivGeneral>
            <DivImg>
              <DivImagesTop>
                <Img src={PlusCicle} alt="" width={80} height={80} />
                <Img src={EnvelopSerie} alt="" />
              </DivImagesTop>

              <DivTitle>
                <Title>Simulação de Taxas</Title>
              </DivTitle>
            </DivImg>
            <DivCalculo>
              <TitleValorDesejado>Valor Desejado</TitleValorDesejado>
              <DivValueAndButton>
                <InputValorDesejado>
                  <ValorDesejado
                    placeholder="R$0,00"
                    type="text"
                    name="valor_desejado"
                    onChange={handleChange}
                    value={inputValue}
                  />
                </InputValorDesejado>
                <DivButtom>
                  <ButtonValorDesejado
                    onClick={(event: React.MouseEvent<HTMLElement>) => calcular()}
                  >
                    <SpanButtonValorDesejado>Calcular</SpanButtonValorDesejado>
                  </ButtonValorDesejado>
                </DivButtom>

              </DivValueAndButton>
            </DivCalculo>
           <DivTable>
              {rateTable.map((item) => (
                <React.Fragment key={item.id}>
                  <TitleNameTable>{item.name}</TitleNameTable>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        borderCollapse: "collapse",
                        border: "1px solid #dddddd",
                      }}
                    >
                      <input
                        type="radio"
                        style={{ margin: "auto 20px auto 20px" }}
                        checked={selectTable === item.id}
                        value={item.id}
                      />
                    </div>
                    <Table>
                      <tr>
                        <TableColTitle>Parcela</TableColTitle>
                        <TableColTitle>Juros da Parcela</TableColTitle>
                        <TableColTitle>Valor Parcela</TableColTitle>
                        <TableColTitle>Valor Total</TableColTitle>
                        <TableColTitle>Comissão Parceiro</TableColTitle>
                      </tr>
                      {item.installments.map((item2) => (
                        <tr
                          onClick={() => selectTableLine(item2, item)}
                          style={
                            lineId === item2.id
                              ? activeLineTable
                              : noActiveLineTable
                          }
                        >
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
          </DivGeneral>
        </ContainerLg>
        {activeBar === true ? (
          <BottomBar>
            <ContainerLg1>
              <SpanBottomBar>
                Nome: {arr?.nameTabela} Parcelas: {arr?.quantParcelas} Valor da Parcela: R${arr?.valorParcelas}
              </SpanBottomBar>
              <ButtonValorDesejado onClick={handleClick}>
                <SpanButtonValorDesejado>Enviar</SpanButtonValorDesejado>
              </ButtonValorDesejado>
            </ContainerLg1>
          </BottomBar>
        ) : (
            <></>
          )}
      </Wrapper>
    </React.Fragment>
  );
};

const DivButtom = styled.div`
width: 100%;
  @media(max-width: 575px) {
    width: 400px;
    justify-content: center;
    display: flex;
    margin-top: 20px;
  }
`;
const DivGeneral = styled.div`
display: grid;
width: 100%;
  @media(max-width: 575px) {
   justify-content: center;
   width: 400px;
   /* display: grid; */
  }
`;
const DivTitle = styled.div`
width: 300px;
  @media(max-width: 575px) {
   text-align: center;
  }
`;
const DivImagesTop = styled.div`
 align-items: center;
 display: flex;
  @media(max-width: 575px) {
   display: none;
  }
`;
const SpanBottomBar = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    30px/40px var(--unnamed-font-family-flexo);
  color: var(--unnamed-color-ffffff);
  text-align: left;
`;
const BottomBar = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 85px;
  background: var(--unnamed-color-228a95);
  justify-content: center;
  display: flex;
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
  @media(max-width: 575px) {
  overflow-y: auto;
  }
`;
const SpanButtonValorDesejado = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    22px/30px var(--unnamed-font-family-flexo);
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

const ContainerLg1 = styled.div`
  width: 100%;
  max-width: 1140px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  /* background: red; */
  /* border: 1px solid black; */
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
  @media(max-width: 575px) {
    max-width: 400px;
  }
`;
const DivImg = styled.div`
  margin-top: 50px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;
  @media(max-width: 575px) {
    display: grid;
    justify-content: center;
    margin-top: 30px;
    width: 400px;
  }
`;
const DivCalculo = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  justify-content: center;
  @media(max-width: 575px) {
    width: 400px;
  }
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
  @media(max-width: 575px) {
    font: var(--unnamed-font-style-normal) normal normal bold 30px Flexo;
  }
`;

const TitleValorDesejado = styled.span`
  margin-top: 80px;
  margin-bottom: 30px;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    40px/55px var(--unnamed-font-family-flexo);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-228a95);
  text-align: center;
  @media(max-width: 575px) {
    margin-top: 30px;
  }
`;

const DivValueAndButton = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 575px) {
    display: grid;
    width: 400px; 
  }
`;

const InputValorDesejado = styled.div`
  width: 470px;
  height: 60px;
  background: var(--unnamed-color-f8f8f8);
  border-radius: 5px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 40px;
  display: flex;
  @media(max-width: 575px) {
  width: 400px;
  }
`;
const ValorDesejado = styled.input`
  font: var(--unnamed-font-style-normal) var(--unnamed-font-size-40)
    var(--unnamed-font-weight-medium) var(--unnamed-font-family-flexo);
  /* font-size: 40px; */
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--unnamed-color-f8f8f8);

  width: 470px;
  height: 60px;
  border-radius: 5px;
  @media(max-width: 575px) {
    width: 400px;
  }
`;
const ButtonValorDesejado = styled.div`
  width: 160px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--unnamed-color-ef9c4b) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  cursor: pointer;
`;

export default SimularTaxas01;
