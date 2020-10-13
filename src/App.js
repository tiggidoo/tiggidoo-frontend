import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import DevenirPro from "./components/views/devenir_pro/DevenirPro";

function App() {
  return (
    <div className="App">
      <Header />
      <DevenirPro />
      <Footer />
    </div>
  );
}

export default App;
