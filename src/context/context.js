import React, {useState} from 'react';
export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [Dress, setDress] = useState([
    {
      title: 'TShirts',
    },
    {
      title: 'pants',
    },
  ]);
  const addDress = (Value) => {
    console.log('-------------------------->', Value);
    setDress([...Dress, {title: Value}]);
  };
  return (
    <AppContext.Provider value={{Dress, addDress}}>
      {children}
    </AppContext.Provider>
  );
};
