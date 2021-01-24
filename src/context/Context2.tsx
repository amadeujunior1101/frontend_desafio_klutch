import React, { createContext, useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import Api from '../services/api.json';

//interface para tipar o conteudo 
//interface User, para definir o objeto
interface User {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

interface InfoEmprestimo {
  idTabela: number,
  nameTabela: string,
  quantParcelas: number,
  valorParcelas: number,
  jurosParcelas: number,
  comissao: number,
  valorDesejado: number,
}

interface Solicitations {
  id: number,
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

//interface AuthContextData, para definir o tipo de conteudo do Context
interface AuthContexData {
  user: User | null;
  pedidoEmprestimo: InfoEmprestimo | null;
  dadosEmprestimo(item: object): void;
  dadosUser(item: object): void;
  createSolicitation(item: object): void;
  // load: boolean;
}

export const postsContextDefaultValue: AuthContexData = {
  user: null,
  pedidoEmprestimo: null,
  dadosEmprestimo: () => null,
  dadosUser: () => null,
  createSolicitation: () => null,
}

/************ */
// export const postsContextDefaultValue: AuthContexData = {}
//definindo o contexto, e passando a interface como tipo <Tipo>
const AuthContext = createContext<AuthContexData>(postsContextDefaultValue);

//Definindo o provider que ficara por volta da aplicacao -- o children são os filhos que ficaram por dentro desse componente, no App.tsx
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [pedidoEmprestimo, setPedidoEmprestimo] = useState<InfoEmprestimo | null>(null)
  const [solicitation, setSolicitation] = useState<Solicitations | null>(null);
  const [arraySolicitation, setArraySolicitation] = useState(Api.solicitation);
  // const [load, setLoad] = useState<boolean>(false)

  // useEffect(()=>{
  //     async function loadStorageData(){
  //         const storageUser = localStorage.getItem('@ReactAuth:user')
  //         const storageToken = localStorage.getItem('@ReactAuth:token')

  //         if(storageUser && storageToken){
  //             setUser(JSON.parse(storageUser))
  //             setLoad(false)
  //         }
  //     }
  //     loadStorageData()
  // }, [])


  // async function signIn(){
  //     const response = await auth.signIn()
  //     localStorage.setItem('@ReactAuth:user', JSON.stringify(response.user))
  //     localStorage.setItem('@ReactAuth:token', response.token)
  //     setUser(response.user)
  // }

  // interface Client {
  //   id: number;
  //   name: string;
  //   phone: string;
  //   cpf: string;
  //   bank: {
  //     label: string;
  //     accountTypeLabel: string;
  //     accountNumber: string;
  //   };
  // }

  function dadosUser(item: User) {
    console.log("dados do User")
    console.log(item)
    setUser({
      id: item.id,
      name: item.name,
      phone: item.phone,
      cpf: item.cpf,
      bank: {
        label: item.bank.label,
        accountTypeLabel: item.bank.accountTypeLabel,
        accountNumber: item.bank.accountNumber,
      }
    })
  }
  function dadosEmprestimo(item: InfoEmprestimo) {
    // console.log("dados do pedido")
    // console.log(item)
    setPedidoEmprestimo({
      idTabela: item.idTabela,
      nameTabela: item.nameTabela,
      quantParcelas: item.quantParcelas,
      valorParcelas: item.valorParcelas,
      jurosParcelas: item.jurosParcelas,
      comissao: item.comissao,
      valorDesejado: item.valorDesejado,
    })
  }

  const history = useHistory();

  function createSolicitation(item: Solicitations) {

    let f = JSON.stringify(Api.solicitation = [{
      id: 1,
      clientId: 1,
      installmentInterest: 1,
      installmentInterestValue: 1,
      comission: 1,
      comissionValue: 1,
      installmentValue: 1,
      cardNumber: "string",
      desiredValue: 1,
      totalLoan: 1,
      installmentId: 1,
      rateTableId: 1,
    }]);

    Api.solicitation.push({
      id: 1,
      clientId: 1,
      installmentInterest: 1,
      installmentInterestValue: 1,
      comission: 1,
      comissionValue: 1,
      installmentValue: 1,
      cardNumber: "string",
      desiredValue: 1,
      totalLoan: 1,
      installmentId: 1,
      rateTableId: 1,
    })

    setSolicitation(item)

    console.log("JSON")
    console.log(f)
    console.log("Solicitação1")
    console.log(arraySolicitation)

    // return history.push(`/solicitar_emprestimo05/${item.id}`)
  }

  return (
    //ao usar !! transforma a variavel em boolean, mesmo que usar Boolean(user)
    //no value sao enviados as variaveis ou funcoes que poderam ser usadas nos componentes filhos
    // <AuthContext.Provider value={{user, logOut, load}}>
    <AuthContext.Provider value={{ dadosUser, user, dadosEmprestimo, pedidoEmprestimo, createSolicitation }}>
      {children}
    </ AuthContext.Provider>
  )
}


//criando um hook para usar nos componentes
export function useAuth() {
  const context = useContext(AuthContext)

  //dentro do context de rotorno estao as variaveis que podem ser acessadas usando o useAuth
  return context
}