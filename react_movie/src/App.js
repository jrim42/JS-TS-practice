import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false) 
      }); 
  }, []);

  const onChange = (event) => setBudget(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setBudget();
    console.log(budget);
  }
  const onSelect = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h3>the coins ({loading ? "" : coins.length})</h3>
      <hr/>
      {loading ? <strong>loading...</strong> : 
        <select>
          <option>select coin</option>
          {coins.map((coin) => 
            <option 
              key={coin.id}
              value={coin.quotes.USD.price}
              symbol={coin.symbol}
              onSelect={onSelect}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>)}
        </select>
      }
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="USD"
          value={budget}
          onChange={onChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
