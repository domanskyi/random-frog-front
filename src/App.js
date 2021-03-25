import "./App.css";

import { useFrog } from "./api";

function App() {
  const { data, loading } = useFrog();

  return (
    <div className="App">
      <header className="App-header">
        {!loading && (
          <img
            src={data}
            className="App-logo"
            alt="logo"
            style={{
              maxWidth: 300,
              height: "100%",
            }}
          />
        )}
        <p>Legush'ka</p>
      </header>
    </div>
  );
}

export default App;
