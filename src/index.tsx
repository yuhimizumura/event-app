import React, {useEffect, useReducer} from "react";
import ReactDOM from 'react-dom';
import { store } from "./redux/storeConfig/store";
import './assets/css/style.scss'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import QrHome from "./component/qrreader/qrCodeApp";
import Login from "./pages/Login/Login";
import {Provider} from "react-redux";
import MyPage from "./pages/mypage/Mypage";
import FrontTop from "./pages/FrontTop/Top";



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter >
              <Switch>
                  <Route exact path="/">
                      <FrontTop />
                  </Route>
                  <Route exact path="/qr">
                      <QrHome />
                  </Route>
                  <Route exact path="/login">
                      <Login />
                  </Route>
                  <Route exact path="/mypage">
                      <MyPage />
                  </Route>
              </Switch>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

