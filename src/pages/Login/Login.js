import React from 'react';
import Amplify from 'aws-amplify';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import {useDispatch, useSelector} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";

Amplify.configure(awsconfig);

const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const dispatch = useDispatch()
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)

            if (isEmpty(nextAuthState) || isEmpty(authData)) return

            // data = {
            //     "nextAuthState":nextAuthState,
            // }
            //
            // dispatch(authStatusSet(data))

            localStorage.setItem("status",nextAuthState)

        });
    }, []);


    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <div>Hello, {user.username}</div>
            <AmplifySignOut />
        </div>
        ) : (
        <AmplifyAuthenticator>
            <AmplifySignUp slot="sign-up" formFields={[
                {type: "username"},
                {type: "password"},
                {type: "email"}
                ]
            }/>
        </AmplifyAuthenticator>
    );
}

export default Login