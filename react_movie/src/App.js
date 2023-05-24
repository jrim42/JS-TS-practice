import { useEffect, useState } from "react";

function Hello() {
  // function destroyed() {
  //   console.log("destroyed");
  // }
  // function created() {
  //   console.log("created");
  //   return destroyed;
  // }
  // useEffect(created, []);
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("destroyed");
    }
  })
  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button
        onClick={onClick}
        >
        {showing ? "hide" : "show"}
      </button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
