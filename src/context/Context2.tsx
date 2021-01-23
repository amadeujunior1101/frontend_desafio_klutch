import { UserInfo } from 'os';
import React, { createContext, useState, useEffect, useContext } from 'react';

//interface para tipar o conteudo 
//interface User, para definir o objeto
interface User {
  name: string
}

interface InfoEmprestimo {
  nameTabela: string,
  quantParcelas: number,
  valorParcelas: number,
}

//interface AuthContextData, para definir o tipo de conteudo do Context
interface AuthContexData {
  user: User | null;
  pedidoEmprestimo: InfoEmprestimo | null;
  dadosEmprestimo(item: object): void;
  dadosUser(item: object): void;
  // load: boolean;
}

export const postsContextDefaultValue: AuthContexData = {
  user: null,
  pedidoEmprestimo: null,
  dadosEmprestimo: () => null,
  dadosUser: () => null,
}

/************ */
// export const postsContextDefaultValue: AuthContexData = {}
//definindo o contexto, e passando a interface como tipo <Tipo>
const AuthContext = createContext<AuthContexData>(postsContextDefaultValue);

//Definindo o provider que ficara por volta da aplicacao -- o children são os filhos que ficaram por dentro desse componente, no App.tsx
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [pedidoEmprestimo, setPedidoEmprestimo] = useState<InfoEmprestimo | null>(null)
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

  function dadosUser(item: User) {
    console.log("dados do User")
    console.log(item)
    // setUser({
    //   name: item.name
    // })
  }
  function dadosEmprestimo(item: InfoEmprestimo) {
    // console.log("dados do pedido")
    // console.log(item)
    setPedidoEmprestimo({
      nameTabela: item.nameTabela,
      quantParcelas: item.quantParcelas,
      valorParcelas: item.valorParcelas,
    })
  }

  return (
    //ao usar !! transforma a variavel em boolean, mesmo que usar Boolean(user)
    //no value sao enviados as variaveis ou funcoes que poderam ser usadas nos componentes filhos
    // <AuthContext.Provider value={{user, logOut, load}}>
    <AuthContext.Provider value={{ dadosUser, user, dadosEmprestimo, pedidoEmprestimo }}>
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