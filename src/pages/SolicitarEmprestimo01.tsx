import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlusCicle from '../img/Grupo 270.png';
import  EnvelopSerie from '../img/_ionicons_svg_md-filing.png';

import TopBar from '../components/TopBar';

import Api from '../services/api.json'
import { cpfMask } from './mask';

type Porps = {

}

const SolicitarEmprestimo01 = (props: Porps) => {
    interface ClientModel {
        id: number;
        name: string;
        phone: string,
        cpf: string,
        bank: [{
            label: string;
            accountTypeLabel: string;
            accountNumber: string;
        }]
      }

    const [inputValue, setInputValue] = useState('');
    const [activeStatus, setActiveStatus] = useState(false);
    const [found, setFound] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [client, setClient] = useState<ClientModel[]>([]);

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        // console.log(e.currentTarget.value)
        setInputValue((e.currentTarget.value));
        // if((e.currentTarget.value) === ''){   
        //     setActiveBar(false)
        // }

        setInputValue(cpfMask(e.target.value))
      })

    const search =()=>{
        var str:string = inputValue.replace(/[^\d]+/g,'');
        if(str === ''){   
            setFound(true)
            setEmpty(true)
        }else {
              const  arr = Api.client;
              let client = arr.filter((item) => {
                 return item.cpf === str
             })

            if(client.length > 0){
                setActiveStatus(true)
                setEmpty(false)
                setFound(true)
                setClient(Object(client))
                console.log('Clients')
                console.log(client)
            }else{
                setEmpty(false)
                setFound(false)
                setActiveStatus(false)
                    // alert("CPF não encontrado!")
            }            
        }
    }
    //  useEffect(()=>{
    //      setActiveBar(!activeBar)
    //     //  console.log("valor da activeBar = " + activeBar)
    //  },[rateTable])
    // const function Instructions extends Component {}
    // const element = <Welcome name="Sara" />;
    const Result =(item:ClientModel)=>{
        return (
            <BoxBuscaCliente key={item.id}>
                <LabelTitle>Cliente encontrado:</LabelTitle>
                <LabelCPF>{cpfMask(item.cpf)}</LabelCPF>
                <LabelCliente>{item.name}</LabelCliente>
                <ButtonSolicitar>
                    <LabelButton >Solicitar</LabelButton>
                </ButtonSolicitar>
            </BoxBuscaCliente>
        )
    }
    const Result2 = ()=>{
        if(empty === true && found === true){
            return(
                <BoxBuscaCliente style={{padding: '30px 0 50px 0'}}>
                    <LabelTitle>Informe o CPF!</LabelTitle>
                </BoxBuscaCliente>
            )
        }  if(empty === false && found === false){
            return(
                <BoxBuscaCliente style={{padding: '30px 0 50px 0'}}>
                    <LabelTitle>Cliente não encontrado!</LabelTitle>
                </BoxBuscaCliente>
            )
        }else{
            return <></>
        }
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
                        <TitleValorDesejado>Busque o Cliente</TitleValorDesejado>
                        <DivValueAndButton>
                            <InputValorDesejado>
                                <ValorDesejado 
                                    placeholder="Digite o CPF"
                                    type="text" 
                                    maxLength={14}
                                    name='documentId'
                                    // value={documentId}
                                    onChange={handleChange}
                                    value={inputValue}
                                />
                             </InputValorDesejado>
                            <ButtonValorDesejado onClick={(event: React.MouseEvent<HTMLElement>) =>search()}>
                                <SpanButtonValorDesejado>
                                    Buscar
                                </SpanButtonValorDesejado>
                            </ButtonValorDesejado>
                        </DivValueAndButton>
                    {
                            activeStatus === true?
                                client.map(item=>(
                                Result(item)
                                ))
                            :
                            Result2()      
                    }
                    </DivCalculo>
                </div>
            </ContainerLg>
        </Wrapper>  
        </React.Fragment>
    );
};

const ButtonSolicitar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--unnamed-color-228a95) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    cursor: pointer;
    
    margin-top: 20px;
    margin-bottom: 20px;
    height: 80px;
`;  
const LabelButton= styled.span`
   /* margin-top: 20px;  */
   font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32) var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
`;
const LabelCliente= styled.label`
   margin: 20px auto auto; 
   font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 33px/39px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
   color: var(--unnamed-color-228a95);
    text-align: center;
`;
const LabelCPF= styled.label`
   margin: 20px auto auto; 
   font: var(--unnamed-font-style-normal) var(--unnamed-font-size-32) var(--unnamed-font-family-flexo);
   color: var(--unnamed-color-ef9c4b);  
    text-align: center;
`;
const LabelTitle = styled.label`
   margin: 20px auto auto; 
   font: var(--unnamed-font-style-normal) var(--unnamed-font-size-32) var(--unnamed-font-family-flexo);
    color: var(--unnamed-color-777777);
    text-align: center;
`;
const BoxBuscaCliente = styled.div`
   width: 100%;
   /* height: 300px; */
   background: var(--unnamed-color-f8f8f8);
   border-radius: 5px;
   margin-top: 40px;
   display: grid;
   justify-content: center;
   text-align: center;
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
    /* width: 475px; */
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
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 30px/40px var(--unnamed-font-family-flexo);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-228a95);
    text-align: center;
`;

const DivValueAndButton = styled.div`
   display: flex;
   align-items: center;
`;

const InputValorDesejado = styled.div`
    /* width: 300px; */
    height: 54px;
    background: var(--unnamed-color-f8f8f8) ;
    border-radius: 5px;
    text-align: center;    
    align-items: center;
    display: flex;
    justify-content: center;
    /* margin-right: 40px; */
`;
const ValorDesejado = styled.input`
    font: var(--unnamed-font-style-normal) var(--unnamed-font-size-32) var(--unnamed-font-weight-medium)  var(--unnamed-font-family-flexo);
    /* font-size: 40px; */
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-777777);
    text-align: center;
    border-width:0px;
    border:none;
    box-shadow: none;
    outline:none!important;
    background: var(--unnamed-color-f8f8f8) ;

    width: 300px;
    height: 54px;
    border-radius: 5px;
`;
const ButtonValorDesejado = styled.div`
   width: 120px;
   height: 54px;
   display: flex;
    align-items: center;
    justify-content: center;
    background: var(--unnamed-color-228a95) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    cursor: pointer;
`;

export default SolicitarEmprestimo01;