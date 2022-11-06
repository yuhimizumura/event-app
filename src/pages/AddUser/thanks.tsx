import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {
  getUserInfo, isEmpty,
} from "../../util/util";
import Footer from "../../component/footer/Footer";
import {addUserRemove} from "../../redux/actions/add";
import {useHistory, useLocation} from "react-router-dom";
import {addUser} from "../../services/user";
import signInUserSet from "../../redux/actions/user";

const AddThanks = () => {

  const [id,setId] = useState<string>("")
  const state:any = useSelector(state => state)
  const add = state.addUser
  const history = useHistory(); // historyを用意する
  const dispatch = useDispatch()
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
      return
    })

    if(!isEmpty(location.state)) {
      const payload:any =  {
        id: add.id,
        sei: add.sei,
        email: add.email,
        gender: add.gender,
        age: add.age,
        tel: `${add.tel1}-${add.tel2}-${add.tel3}`,
        sns: add.sns,
        sns_name: add.sns_name === undefined || add.sns_name === "" ? " " : add.sns_name,
        pref: add.pref,
        profile: add.profile
      }

      addUser(payload)
    }
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

  const handleLink = (link:string) => {
    //　登録で一時的に保存していたStateを削除
    dispatch(signInUserSet(add))
    dispatch(addUserRemove())
    history.push(link)
  }

  return (
    <div className="App">
      <Header />
        <div id="add-user-area">
          <div className="wrap">
            <div className="center">
              <h2>本会員登録ありがとうございます。</h2>
              <p>これから、たくさんのイベントに参加してみましょう！</p>
            </div>
            <div className="d-flex mx-auto mt-3 between w-100 button-area">
              <button className="mypage-button" onClick={() => handleLink('/mypage')}>マイページ</button>
              <button className="top-button" onClick={() => handleLink('/#section2')}>イベントを探す</button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default AddThanks;
