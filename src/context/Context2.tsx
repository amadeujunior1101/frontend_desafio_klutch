import React from 'react';

// We define our type for the context properties right here
type ContextProps = { 
  authenticated: boolean,
  lang: string,
  theme: string
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export const AppContext = 
  React.createContext<Partial<ContextProps>>({});

const Header = () => {
  return <AppContext.Consumer>
  {
    ({authenticated}) => {
      if(authenticated) {
        return <h1>Logged in!</h1>
      }
      return <h1>You need to sign in</h1>
    }
  }
  </AppContext.Consumer>
}

// Agora, podemos definir apenas as propriedades que realmente precisamos
const App = () => {
  return <AppContext.Provider value={ {
    authenticated: true,
  } }>
    <Header/>
  </AppContext.Provider>
}