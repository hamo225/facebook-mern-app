//what the data layer initilly looks like - this is the inital staet of the reducer
export const initialState = {
  user: null,
};

//actions we can dispatch into the data layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

// we listen inside the reducer for actions. and tell it if it receives actions what to do -
// here - if u get set user action - spread the state and change the user property value to what we passed in as a user payload
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
