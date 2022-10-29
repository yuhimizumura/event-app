import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import FrontTop from "./pages/FrontTop/Top";
import QrHome from "./component/qrreader/qrCodeApp";
import Login from "./pages/Login/Login";
import MyPage from "./pages/mypage/Mypage";
import React from "react";
import {withAuthenticator} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import AddUser from "./pages/AddUser";
import AddConfirm from "./pages/AddUser/confirm";
import AddThanks from "./pages/AddUser/thanks";
import {useSelector} from "react-redux";
import {isEmpty} from "./util/util";

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
    const state:any = useSelector(state => state)
    const ref = document.referrer
    console.log(ref)
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
                    {
                        isEmpty(state.signInUser) ? <Login /> : <Redirect to="/mypage" />
                    }
                </Route>
                <Route exact path="/add-user">
                    {
                        isEmpty(state.signInUser) ? <AddUser /> : <Redirect to="/mypage" />
                    }
                </Route>
                <Route exact path="/add-confirm">
                    {
                        isEmpty(state.signInUser) ? <AddConfirm /> : <Redirect to="/mypage" />
                    }
                </Route>
                <Route exact path="/add-thanks">
                    {
                        isEmpty(state.signInUser) ? <AddThanks /> : <Redirect to="/mypage" />
                    }
                </Route>
                <Route exact path="/mypage">
                    <MyPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default App;

