import React, { useState, createContext, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Scanner');

  console.log(currentPage);

  const providerState = {
    currentPage,
    setCurrentPage,
  };

  return (
    <NavigationContext.Provider value={providerState}>
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigationContext() {
  return useContext(NavigationContext);
}
