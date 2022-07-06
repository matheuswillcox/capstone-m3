import Routes from "./services/routes";
import "./App.css";
import { GlobalProvider } from "./providers/global"

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </div>

  );
}

export default App;
