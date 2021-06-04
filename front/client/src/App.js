import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  React.useEffect(() => {
    fetch("/api2")
      .then((res) => res.json())
      .then((data2) => setData2(data2.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!data2 ? "Loading..." : data2}</p>
      </header>
    </div>
  );
}

export default App;