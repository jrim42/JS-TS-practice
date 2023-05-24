// import Button from "./Button"
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("always");
  
  // called only once
  useEffect(() => {
    console.log("only once")
  }, [])

  // watching keyword
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("serch for", keyword)
    }
  }, [keyword]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="search"
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button 
        onClick={onClick}
      >
        click here
      </button>
    </div>
  );
}

export default App;
