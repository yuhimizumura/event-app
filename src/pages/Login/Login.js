import React, {useEffect} from 'react';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {useDispatch} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";
import {useHistory} from "react-router-dom"
import signInUserSet from "../../redux/actions/user";
import {fetchUser} from "../../services/user";


const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            if (isEmpty(nextAuthState) || isEmpty(authData)) return

            const data = {
                "nextAuthState":nextAuthState,
            }
            dispatch(authStatusSet(data))

            localStorage.setItem("status",nextAuthState)
        });
    }, []);

    useEffect(() => {
        if (user === undefined) return
        let fetchId = user.username
        const res = fetchUser(fetchId)
        res.then(data => {
            console.log(data)
            dispatch(signInUserSet(data.data.getUser))
            history.push("/mypage")
        }).catch(error => {
            console.log(error)
        })
    },[user])


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