import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthDriver from "./components/Auth/authDriver.js";
import Landing from "./components/Landing/landing.js";
import HomeDriver from "./components/Home/homeDriver.js";
import HomeClient from "./components/Home/homeClient.js";
import AuthClient from "./components/Auth/authClient.js";
const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Switch>
        <Route path="/landing" exact component={Landing}></Route>
        <Route path="/auth/driver" exact component={AuthDriver} />
        <Route path="/home/driver" exact component={HomeDriver} />
        <Route path="/auth/client" exact component={AuthClient} />
        <Route path="/home/client" exact component={HomeClient} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
