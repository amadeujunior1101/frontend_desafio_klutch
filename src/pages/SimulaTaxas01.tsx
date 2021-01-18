import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlusCicle from '../img/Grupo 270.png';
import  EnvelopSerie from '../img/_ionicons_svg_md-filing.png';

import TopBar from '../components/TopBar';

import Api from '../services/api.json'

type Porps = {

}

const SimulaTaxas01 = (props: Porps) => {
    interface RatetableModel {
        id: number;
        name: string;
        default: boolean,
        installments: [{
            id: number;
            installments: number;
            installmentInterest: number;
            installmentValue: number;
            fullValue: number;
            comission: number;
        }]
      }

    const [inputValue, setInputValue] = useState('');
    const [activeBar, setActiveBar] = useState(false);
    const [rateTable, setRateTable] = useState<RatetableModel[]>([]);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // No longer need to cast to any - hooray for react!
    //     // setInputValue(e.target.value);
    //     console.log('Valor digitado' + e)
    // }

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        // console.log(e.currentTarget.value)
        setInputValue((e.currentTarget.value));
        if((e.currentTarget.value) === ''){   
            setActiveBar(false)
        }
      })

    const calcular =()=>{
        if(inputValue === ''){   
            console.log('Informe um valor')
        }
         else if(Number(inputValue) < 300){   
             console.log('menor que 300')
         }else if(Number(inputValue) > 10000){
             console.log('maior que 10000')
         }
         else {
            console.log('valor permitido para emprestimos')
            // console.log(Api.rateTable)
            const data:object = Api.rateTable;
            setActiveBar(true)
            console.log(data)
            setRateTable(Object(Api.rateTable))

        }
    }
    //  useEffect(()=>{
    //      setActiveBar(!activeBar)
    //     //  console.log("valor da activeBar = " + activeBar)
    //  },[rateTable])

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
                        <Title>Simulação de Taxas</Title>
                        </div>
                    </DivImg>
                    <DivCalculo>
                        <TitleValorDesejado>Valor Desejado</TitleValorDesejado>
                        <DivValueAndButton>
                            <InputValorDesejado>
                            {/* <input type="text" name="name" /> */}
                                <ValorDesejado 
                                    placeholder="R$0,00"
                                    type="text" 
                                    name="valor_desejado"
                                    //  onChange ={ (e: React.FormEvent<HTMLInputElement>) => {
                                    //     //  const newValue = e.currentTarget.value;
                                         
                                    //  }}
                                    onChange={handleChange}
                                    value={inputValue}
                                />
                             </InputValorDesejado>
                            <ButtonValorDesejado onClick={(event: React.MouseEvent<HTMLElement>) =>calcular()}>
                                <SpanButtonValorDesejado>
                                    Calcular
                                </SpanButtonValorDesejado>
                            </ButtonValorDesejado>
                        </DivValueAndButton>
                    </DivCalculo>
                    <DivTable>
                        {
                            rateTable.map(item=>
                            <React.Fragment key={item.id}>
                                <TitleNameTable>{item.name}</TitleNameTable>
                                <div style={{display: 'flex'}}>
                                <div style={{alignItems: 'center', display: 'flex', borderCollapse: 'collapse',
                                                        border: '1px solid #dddddd', }}>
                                    <input type="radio" 
                                    style={{margin: 'auto 20px auto 20px'}}
                                                    value={1}  
                                                    checked={item.default === true? true: false} 
                                                    // onChange={this.onSiteChanged} 
                                     />
                                </div>
                                <Table>
                                    <tr>
                                        {/* <TableColTitle style={{width: 50}}> - </TableColTitle> */}
                                        <TableColTitle>Parcela</TableColTitle>
                                        <TableColTitle>Juros da Parcela</TableColTitle>
                                        <TableColTitle>Valor Parcela</TableColTitle>
                                        <TableColTitle>Valor Total</TableColTitle>
                                        <TableColTitle>Comissão Parceiro</TableColTitle>
                                    </tr>
                                    {/* <TableColItem rowSpan={2}>
                                                <input type="radio" 
                                                    value={1} 
                                                    checked={item.default === true? true: false} 
                                                    // onChange={this.onSiteChanged} 
                                                />
                                        </TableColItem> */}
                                    {
                                        item.installments.map(item2=> 
                                    <tr>
                                        <TableColItem>{item2.installments}</TableColItem>
                                        <TableColItem>{item2.installmentInterest}%</TableColItem>
                                        <TableColItem>R${item2.installmentValue}</TableColItem>
                                        <TableColItem>R${item2.fullValue}</TableColItem>
                                        <TableColItem>R${item2.comission}</TableColItem>
                        
                                    </tr>
                                        )
                                    }
                                    {/* <tr>
                                        <TableColItem>2</TableColItem>
                                        <TableColItem>20%</TableColItem>
                                        <TableColItem>R$1.115,00</TableColItem>
                                        <TableColItem>R$1.115,00</TableColItem>
                                        <TableColItem>R$1.115,00</TableColItem>
                                    </tr>                                 */}
                                </Table>
                                </div>
                                
                        </React.Fragment>
                            )
                        }
        
                    </DivTable>
                </div>
            </ContainerLg>
            {
                activeBar === true ?
                    <BottomBar>
                        <ContainerLg1>
                            <SpanBottomBar>Nome: Tabela Padrão Parcelas: 2 Valor da Parcela: R$1.115,00</SpanBottomBar>
                            <ButtonValorDesejado>
                                <SpanButtonValorDesejado>
                                    Enviar
                                </SpanButtonValorDesejado>
                            </ButtonValorDesejado>
                        </ContainerLg1>
                    </BottomBar>
                    :
                    <>
                    </>
            }
          
        </Wrapper>  
        </React.Fragment>
    );
};

const SpanBottomBar = styled.span`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 30px/40px var(--unnamed-font-family-flexo);
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
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 25px/33px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-777777);
    text-align: center;
   
    border: 1px solid #dddddd;
  padding: 8px;
`;
const TableColItem = styled.td`
    font: var(--unnamed-font-style-normal) normal normal 23px/31px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-777777);
    text-align: center;

    border: 1px solid #dddddd;
  padding: 8px;
`;
const TitleNameTable = styled.div`
    margin: 30px auto 30px auto;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 29px/38px var(--unnamed-font-family-flexo);
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
const SpanButtonValorDesejado = styled.span`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/30px var(--unnamed-font-family-flexo);
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
`;
const DivImg = styled.div`
margin-top: 50px;   
    width: 100%;
    align-items: center ; 
    display: flex;
    justify-content: left;
`;
const DivCalculo = styled.div`
    width: 100%;
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
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 40px/55px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-228a95);
    text-align: center;
`;

const DivValueAndButton = styled.div`
   display: flex;
   align-items: center;
`;

const InputValorDesejado = styled.div`
    width: 470px;
    height: 60px;
    background: var(--unnamed-color-f8f8f8) ;
    border-radius: 5px;
    text-align: center;    
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 40px;
`;
const ValorDesejado = styled.input`
    font: var(--unnamed-font-style-normal) var(--unnamed-font-size-40) var(--unnamed-font-weight-medium)  var(--unnamed-font-family-flexo);
    /* font-size: 40px; */
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-777777);
    text-align: center;
    border-width:0px;
    border:none;
    box-shadow: none;
    outline:none!important;
    background: var(--unnamed-color-f8f8f8) ;

    width: 470px;
    height: 60px;
    border-radius: 5px;
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

export default SimulaTaxas01;