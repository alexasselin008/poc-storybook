import "./App.css";
import { Button } from "@components/Button";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
                <div style={{ display: "flex", flexDirection: "row", gap:"12px" }}>
                    <Button onClick={() => alert("coucou")}>Click to receive an alert</Button>
                    <Button primary onClick={() => alert("coucou2")}>Click to receive a another alert</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
