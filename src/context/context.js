import React, {useState} from 'react';
const AppContext = React.createContext();
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
    setDress([...Dress, {title: Value}]);
  };
  return (
    <AppContext.Provider value={{Dress, addDress}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
