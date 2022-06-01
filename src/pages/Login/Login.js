import React, {useEffect, useState} from 'react';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {useDispatch, useSelector} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";
import {Redirect} from "react-router-dom"
const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const [token,setToken] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    // console.log(state)

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            if (isEmpty(nextAuthState) || isEmpty(authData)) return
            data = {
                "nextAuthState":nextAuthState,
            }
            dispatch(authStatusSet(data))
            localStorage.setItem("jwToken",authData.signInUserSession.accessToken.getJwtToken())
            localStorage.setItem("status",nextAuthState)
        });
    }, []);


    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <div>Hello, {user.username}</div>
            {/*<AmplifySignOut />*/}
            <Redirect to={{pathname:"/mypage",state:{token:localStorage.getItem("jwToken")}}} />
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