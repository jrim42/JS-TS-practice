import { useState } from "react"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
    console.log(toDos);
  }
  
  return (
    <div>
      <h2>my todos: {toDos.length}</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="todo" 
          value={toDo}
          onChange={onChange}
        />
        <button>add todo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
