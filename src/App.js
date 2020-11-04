import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProForm from "./components/views/professional/registration_form/ProForm";
import BecomePro from "./components/views/devenir_pro/BecomePro";

//Matarial-UI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./css/material-ui/configTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={BecomePro} />
            <Route path="/proform" component={ProForm} />
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
