import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();



const initialData = {
  name: "Ali Hassan",
  age: 28,
  startCount: 0,
  theme: "light",
};
const reducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCount: action.newValue };

    case "TOGGLE_THEME":
      return { ...state, theme: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  }

  const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge });
  }    

  const toggleTheme = (newTheme) => {
    dispatch({ type: "TOGGLE_THEME", newValue: newTheme });
  }

  const increasBy1 = (startCount) => {
    dispatch({ type: "INCREASE", newValue: startCount });
  }




  return (
    <ThemeContexttt.Provider value={{ ...firstState, changeName, changeAge, toggleTheme, increasBy1 }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
