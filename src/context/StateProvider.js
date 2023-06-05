
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// reducer initialState, children are coming from index.js
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

