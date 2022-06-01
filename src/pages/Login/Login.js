import React, {useEffect} from 'react';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {useDispatch, useSelector} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";

const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    // console.log(state)

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            if (isEmpty(nextAuthState) || isEmpty(authData)) return
            console.log(nextAuthState)
            console.log(authData.signInUserSession.accessToken.getJwtToken())
            data = {
                "nextAuthState":nextAuthState,
            }
            dispatch(authStatusSet(data))
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
                {
                    type: "username",
                    label: " ユーザ名(Email) *",
                    placeholder: "ユーザ名を入力",
                    required: true,
                },
                {
                    type: "password",
                    label: " パスワード *",
                    placeholder: "パスワードを入力",
                    required: true,
                },
                ]
            }/>
        </AmplifyAuthenticator>
    );
}

export default Login