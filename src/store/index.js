import React from 'react';

const GlobalContext = React.createContext({});

export default GlobalContext;

export function useGlobalContext() {
    return React.useContext(GlobalContext);
}
