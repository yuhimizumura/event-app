import React, {useEffect, useReducer} from "react";
import ReactDOM from 'react-dom';
import { store } from "./redux/storeConfig/store";
import './assets/css/style.scss'
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/aws.scss";
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
import Amplify, {I18n,Auth} from "aws-amplify"
import {L10n} from "./lib/l10n";
import awsconfig from "./aws-exports";
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo-hooks';

I18n.setLanguage('ja'); // Add
I18n.putVocabularies(L10n); // Add

const config = {
    aws_project_region: awsconfig.aws_project_region,
    aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsconfig.aws_appsync_region,
    aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
    Auth: {
        identityPoolId: awsconfig.aws_cognito_identity_pool_id,
        region: awsconfig.aws_cognito_region,
        identityPoolRegion: awsconfig.aws_cognito_region,
        userPoolId: awsconfig.aws_user_pools_id,
        userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
    },
};

Amplify.configure(config);

const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () =>
            (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    disableOffline: true,
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

