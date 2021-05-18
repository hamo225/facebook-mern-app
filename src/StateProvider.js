import React, { createContext, useContext, useReducer } from "react"; //import needed files

export const StateContext = createContext(); //preparing the data layer

// higher order component - using this to wrap the app in the state provder allowing for data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//whenver we want to pull soemthing from the layer we use this hook
export const useStateValue = () => useContext(StateContext);
