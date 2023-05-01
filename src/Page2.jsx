
 import {useContext } from "react";
 import ThemeContext from "./context/DataContext";
const Page2 = () => {

  const {name, age, theme, startCount} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <h1>WELCOME TO PAGE 2</h1>
       <h2>My Name Is {name} </h2> 
       <h2>My AGE Is {age} </h2> 
       <button>count is {startCount}</button>
       
    </div>
  );
}

export default Page2;
