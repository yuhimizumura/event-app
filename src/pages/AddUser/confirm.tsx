import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useSelector} from "react-redux";
import {Redirect, useHistory, useLocation} from "react-router-dom"
import {
  getUserInfo, isEmpty,
} from "../../util/util";
import Footer from "../../component/footer/Footer";

const AddConfirm = () => {

  const [id,setId] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const state:any = useSelector(state => state)
  const user = state.signInUser

  useEffect(() => {
    // if (id === "") {
    //   history.push("/login")
    //   return
    // }
    // if (!isEmpty(user)) {
    //   history.push("/mypage")
    //   return
    // }
  },[])

  getUserInfo("id").then(data => {
    setId(data)
  }).catch(error => {
    console.log(error)
  })

  getUserInfo("email").then(data => {
    setEmail(data)
  }).catch(error => {
    console.log(error)
  })

  const history = useHistory();

  const handleSubmit = () => {
    history.push('/add-thanks')
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
                <label htmlFor="sei">お名前<span>*</span></label>
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
          <div className="d-flex w-50 between mx-auto">
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
