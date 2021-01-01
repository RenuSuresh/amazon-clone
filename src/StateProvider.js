// setup data layer
// record of the basket
// use in checkout page
// track of user, one who is logged in

import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

// BUILD A PROVIDER, WRAP ENTIRE APP IN PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
