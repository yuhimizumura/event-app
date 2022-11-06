import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useHistory, useLocation} from "react-router-dom"
import {
  getUserInfo, isEmpty,
} from "../../util/util";
import Footer from "../../component/footer/Footer";
import {addUserRemove} from "../../redux/actions/add";

const AddConfirm = () => {

  const [id,setId] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const state:any = useSelector(state => state)
  const add = state.addUser
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    getUserInfo("id").then(data => {
      if (data == undefined || !checkAccess() || isEmpty(location.state)) {
        throw new Error("not Id")
      }
      setId(data)
    }).catch(error => {
      history.push("/add-user")
    })

    getUserInfo("email").then(data => {
      if (data === undefined || !checkAccess() || isEmpty(location.state)) {
        throw new Error("not Email")
      }
      setEmail(data)
    }).catch(error => {
      history.push("/add-user")
    })
  },[])

  const checkAccess = () => {
    let r = false
    if (add.sei !== undefined || add.sei !== "") r = true
    if (add.gender !== undefined || add.gender !== "") r = true
    if (add.age !== undefined || add.age !== "") r = true
    if (add.tel1 !== undefined || add.tel1 !== "") r = true
    if (add.tel2 !== undefined || add.tel2 !== "") r = true
    if (add.tel3 !== undefined || add.tel3 !== "") r = true
    if (add.sns !== undefined || add.sns !== "") r = true
    if (add.pref !== undefined || add.pref !== "") r = true

    return r
  }

  const history = useHistory();

  const handleSubmit = () => {
    history.push({ pathname: '/add-thanks', state: add})
  }

  const handleBackSubmit = () => {
    history.push('/add-user')
  }

  return (
    <div className="App">
      <Header />
      <div id="add-user-area">
        <h1 className="text-center ">新規会員登録</h1>
        <form className="form-wrap" method="GET" action="/add-thanks">
          <input type="hidden" name="id" defaultValue={id}/>
          <div className="d-flex">
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="sei">お名前</label>
              </div>
              <div className="form_td">
                <span>{state.addUser.sei}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="email">Email</label>
              </div>
              <div className="form_td">
                <span>{email}</span>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="gender">性別</label>
              </div>
              <div className="form_td d-flex-row">
                <span>{state.addUser.gender}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="age">年代</label>
              </div>
              <div className="form_td">
                <span>{state.addUser.age}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="tel">電話番号</label>
              </div>
              <div className="form_td">
                <span>{state.addUser.tel1} - {state.addUser.tel2} - {state.addUser.tel3}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="sns">SNS</label>
              </div>
              <div className="form_td">
                <span>{state.addUser.sns}</span>
              </div>
            </div>
          </div>
          {
            state.addUser.sns_name !== undefined && state.addUser.sns_name !== "" &&
            <div>
                <div className="d-flex">
                    <div className="form_th">
                        <label htmlFor="sns">SNSアカウント名</label>
                    </div>
                    <div className="form_td">
                        <span>@{state.addUser.sns_name}</span>
                    </div>
                </div>
            </div>
          }
          <div>
            <div className="d-flex">
              <div className="form_th">
                <label htmlFor="pref">都道府県</label>
              </div>
              <div className="form_td">
                <span>{state.addUser.pref}</span>
              </div>
            </div>
          </div>
          <div className="d-flex w-50 mt-2 between mx-auto">
            <input className="w-25 back-button d-block" type="submit" onClick={handleBackSubmit} value={"戻る"}/>
            <input className="w-25 button d-block" type="submit" onClick={handleSubmit} value={"登録"}/>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddConfirm;
