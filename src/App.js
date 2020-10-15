import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
//import RegistrationForm from "./components/views/professional/registration_form/RegistrationForm";
import BecomePro from "./components/views/devenir_pro/BecomePro";

function App() {
  return (
    <div className="App">
      <Header />
      <BecomePro />
      {/* <RegistrationForm /> */}
      <Footer />
    </div>
  );
}

export default App;
