import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProForm from "./components/views/pro/professional/registration_form/ProForm";
import BecomePro from "./components/views/pro/devenir_pro/BecomePro";
import ResetPasswordForm from './components/auth/ResetPasswordForm';
//Matarial-UI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/css/material-ui/configTheme";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/reset-password-form/:token/:email" component={ResetPasswordForm} />
            <Route exact path="/proform" component={ProForm} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/" component={BecomePro} />
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;