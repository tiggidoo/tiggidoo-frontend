import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProForm from "./components/views/pro/registration_form/ProForm";
import BecomePro from "./components/views/pro/devenir_pro/BecomePro";
import ResetPasswordForm from './components/auth/ResetPasswordForm';
//Matarial-UI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/css/material-ui/configTheme";
import SignIn from "./components/auth/SignIn";
//import DashboardPro from "./components/views/pro/DashboardPro";

import Request from "./components/views/pro/request/Request";
import History from "./components/views/pro/history/History";
import Help from "./components/views/pro/help/Help";
import MyAvailabilities from "./components/views/pro/activity/MyAvailabilities";
import MyActivity from "./components/views/pro/activity/MyActivity";
import Data from "./components/views/pro/personall_data/Data";
import MyCriteria from "./components/views/pro/personall_data/MyCriteria";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>

            <Route exact path="/reset-password-form/:token/:email" component={ResetPasswordForm} />
            <Route exact path="/proform" component={ProForm} />
            <Route exact path="/login" component={SignIn} />

            <Route exact path="/request" component={ Request } />
            <Route exact path="/activity/my_activity" component={ MyActivity } />
            <Route exact path="/activity/my_availabilities" component={ MyAvailabilities } />
            <Route exact path="/history" component={ History } />
            <Route exact path="/personal_informations/personal_data" component={ Data } />
            <Route exact path="/personal_informations/my_criteria" component={ MyCriteria } />
            <Route exact path="/help" component={ Help } />
            <Route exact path="/" component={BecomePro} />

          </Switch>
        </div>
        </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;