import React, { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext();

export const useStateValue = () => useContext(StoreContext);

export const Store = ({ reducer, initState, children }) => (
  <StoreContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </StoreContext.Provider>
);
