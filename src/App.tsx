import {BrowserRouter, Route, Switch} from "react-router-dom";
import FrontTop from "./pages/FrontTop/Top";
import QrHome from "./component/qrreader/qrCodeApp";
import Login from "./pages/Login/Login";
import MyPage from "./pages/mypage/Mypage";
import React from "react";
import {withAuthenticator} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";

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

const App = () => {
    return (
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
    )
}

export default withAuthenticator(App);

