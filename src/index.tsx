import React, {useEffect, useReducer} from "react";
import ReactDOM from 'react-dom';
import { PersistGate} from "redux-persist/integration/react";
import store ,{ persistor } from "./redux/configureStore";
import './assets/css/style.scss'
import "./assets/css/aws.scss";
import {Provider} from "react-redux";
import {I18n,Auth} from "aws-amplify"
import {L10n} from "./lib/l10n";
import awsconfig from "./aws-exports";
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo-hooks';
import App from "./App";

I18n.setLanguage('ja'); // Add
I18n.putVocabularies(L10n); // Add

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
              <PersistGate persistor={persistor} loading={null} >
                <App />
              </PersistGate>
          </Provider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

