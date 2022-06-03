import React, {useEffect, useState} from 'react';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {useDispatch, useSelector} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";
import {Redirect,useHistory} from "react-router-dom"
import {Amplify, Auth,API,graphqlOperation} from "aws-amplify";
import awsmobile from "../../aws-exports";
import {getTodo, listTodos} from "../../graphql/queries";
import signInUserSet from "../../redux/actions/user";


const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const [token,setToken] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const history = useHistory()

    // console.log(state)

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

    const fetchUser = async (id) => {
        let uId = id
        if (id === undefined) {
            uId = user.username
        }
        const todo = await API.graphql(graphqlOperation(getTodo,{
            id:uId
        }))
        return todo
    }

    useEffect(() => {
        if (user === undefined) return
        const fetchId = user.userName
        fetchUser(fetchId).then(data => {
            dispatch(signInUserSet(data.data))
            // window.location.href = "/mypage"
            history.push("/mypage")
        }).catch(error => {
            console.log(error)
        })
    },[user])


    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <div>Hello, {user.username}</div>
            {/*{fetchUser()}*/}
            <AmplifySignOut />
            {/*<Redirect to={{pathname:"/mypage"}} />*/}
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