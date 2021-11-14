import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Scrollbar from "../../components/scrollbar";
import Routes from "../__Routes";
import "../../css/style.css";
import "../../css/responsive.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="scrool">
        <Switch>
          <Routes />
        </Switch>
        <Scrollbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
