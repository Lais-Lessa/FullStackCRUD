import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RoutesMain from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/globalStyles";


const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;

