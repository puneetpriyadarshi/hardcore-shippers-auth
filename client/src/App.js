import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthDriver from "./components/Auth/authDriver.js";
import Landing from "./screens/Landing/Landing.js";
import HomeDriver from "./screens/Driver/Home/HomeDriver.js";
import HomeClient from "./screens/Dealer/Home/HomeDealer.js";
import AuthClient from "./components/Auth/authClient.js";
const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/auth/driver" exact component={AuthDriver} />
        <Route path="/home/driver" exact component={HomeDriver} />
        <Route path="/auth/client" exact component={AuthClient} />
        <Route path="/home/client" exact component={HomeClient} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
