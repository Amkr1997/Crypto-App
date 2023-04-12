import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CryptoProvider from "./Context/CryptoProvider";
import CryptoNews from "./Pages/CryptoNews";
import CryptoGraph from "./Pages/CryptoGraph";
//import CryptoContext from "./Context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<CryptoNews />}></Route>
          <Route path="/cryptograph/:id" element={<CryptoGraph />}></Route>
        </Routes>
        <Footer />
      </Router>
    </CryptoProvider>
  );
}

export default App;
