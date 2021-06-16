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

import RequestsList from "./components/views/pro/request/Index";
import History from "./components/views/pro/history/History";
import Help from "./components/views/pro/help/Help";
//import MyAvailabilities from "./components/views/pro/activity/my_availabilities/MyAvailabilities";
//import MyActivity from "./components/views/pro/activity/my_activities/MyActivity";
//import Data from "./components/views/pro/personall_data/Data";
//import MyCriteria from "./components/views/pro/personall_data/MyCriteria";
import Activities from "./components/views/pro/activity/Activities";
import Info from "./components/views/pro/personall_data/Info";
import ShowNewReservation from "./components/views/pro/request/ShowNewReservation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>

            <Route exact path="/reset-password-form/:token/:email" component={ResetPasswordForm} />
            <Route exact path="/proform" component={ProForm} />
            <Route exact path="/login" component={SignIn} />

            <Route exact path="/reservations-list" component={ RequestsList } />
            <Route exact path="/show-reservation/:id/:statusId" component={ ShowNewReservation } />
            <Route exact path="/activity" component={ Activities } />
            {/* <Route exact path="/activity/my_availabilities" component={ MyAvailabilities } /> */}
            <Route exact path="/history" component={ History } />
            <Route exact path="/personal_data" component={ Info } />
            {/* <Route exact path="/personal_informations/my_criteria" component={ MyCriteria } /> */}
            <Route exact path="/help" component={ Help } />
            <Route exact path="/" component={BecomePro} />

          </Switch>
        </div>
        </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;