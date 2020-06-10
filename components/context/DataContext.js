import React, { createContext, useState, useContext } from 'react';

export const DataContext = createContext([]);

export function DataContextProvider({ children }) {
  const [data, setData] = useState(null);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
}

export const UseDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('DataContext Failed');
  }
  return context;
};
