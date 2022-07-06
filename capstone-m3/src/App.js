import Routes from "./services/routes";
import "./App.css";
import { GlobalProvider } from "./providers/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <Routes />
      </GlobalProvider>
    </div>
  );
}

export default App;
