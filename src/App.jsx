import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/routes";


function App() {
  return (
    <>  
   
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
