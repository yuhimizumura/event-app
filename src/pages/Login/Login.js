import React, {useEffect} from 'react';
import {AmplifyAuthenticator,AmplifySignUp,AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {useDispatch, useSelector} from "react-redux";
import authStatusSet from "../../redux/actions/auth";
import {isEmpty} from "../../util/util";
import {useHistory} from "react-router-dom"
import signInUserSet,{signInUserRemove} from "../../redux/actions/user";
import {fetchUser} from "../../services/user";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import addUserSet, {addUserRemove} from "../../redux/actions/add";
import {Auth} from "aws-amplify";


const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state)

    useEffect(() => {

        window.scrollTo(0, 0)
        if(authState === undefined) {
          Auth.currentAuthenticatedUser().then(authData => {
                setAuthState(AuthState.SignedIn);
                setUser(authData);
              });
        }

        return onAuthUIStateChange((nextAuthState, authData) => {
            // if (isEmpty(nextAuthState) || isEmpty(authData)) return
            setAuthState(nextAuthState);
            setUser(authData)

            const data = {
                "nextAuthState":nextAuthState,
            }
            dispatch(authStatusSet(data))

            localStorage.setItem("status",nextAuthState)
        });
    }, []);

    useEffect(() => {
        if (user !== undefined) {
            let fetchId = user.username
            const res = fetchUser(fetchId)
            res.then(data => {
                dispatch(signInUserSet(data.data.getUser))
                if (data.data.getUser !== null) {
                    history.push("/mypage")
                } else {
                    const payload = {
                        id: fetchId
                    }
                    dispatch(addUserSet(payload))
                    console.log(state)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },[user])

    const handleAdd = () => {
        history.push("/add-user")
    }

    const handleLogout = () => {
        // ユーザ情報を削除
        dispatch(addUserRemove())
        dispatch(signInUserRemove())
        Auth.signOut()
        history.push("/")
    }

    console.log(AuthState.SignedIn)
    console.log(user)
    console.log(authState)

    return authState === AuthState.SignedIn && user ? (
            <div id="login" className="App">
                <Header />
                <div className="center-contents">
                    <div className="wrap">
                        <div className="center">
                            <h2>仮会員登録ありがとうございます。</h2>
                            <p>まだ、<span className="alert-text">本会員登録</span>は完了しておりません</p>
                            <p>下記ボタンより、会員登録を完了してください。</p>
                        </div>
                        <div className="d-flex mx-auto mt-3 between w-100 button-area">
                            <button type="button" className="add-button" onClick={() => handleAdd()}>本会員登録へ進む</button>
                            <button type="button" className="logout-button" onClick={() => handleLogout()}>ログアウト</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        ) : (
        <>
            <Header />
            <AmplifyAuthenticator>
                <AmplifySignUp slot="sign-up" formFields={[
                    {
                        type: "username",
                        label: " ユーザ名(Email)",
                        placeholder: "ユーザ名を入力してください。",
                        required: true,
                    },
                    {
                        type: "password",
                        label: " パスワード",
                        placeholder: "パスワードを入力してください。",
                        required: true,
                    },

                ]
                }/>
            </AmplifyAuthenticator>
            <Footer disp={false}/>
        </>
    );
}

export default Login