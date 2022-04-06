import React from "react";
import ReactDOM from 'react-dom';
import Top from './Top';
import './assets/css/style.css'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import QrHome from "./component/qrreader/qrCodeApp";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
          <Switch>
              <Route exact path="/">
                  <Top />
              </Route>
              <Route path="/qr">
                  <QrHome />
              </Route>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

