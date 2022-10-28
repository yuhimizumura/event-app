import React, {useEffect, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {
  getUserInfo, isEmpty,
} from "../../util/util";
import Footer from "../../component/footer/Footer";
import {addUserRemove} from "../../redux/actions/add";
import {useHistory} from "react-router-dom";
import {addUser} from "../../services/user";

const AddThanks = () => {

  const [id,setId] = useState<string>("")
  const state:any = useSelector(state => state)
  const add = state.addUser
  const history = useHistory(); // historyを用意する
  const dispatch = useDispatch()
  const user = state.signInUser

  useEffect(() => {

    const payload:any =  {
      id: add.id,
      sei: add.sei,
      email: add.email,
      gender: add.gender,
      age: add.age,
      tel: `${add.tel1}-${add.tel2}-${add.tel3}`,
      sns: add.sns,
      sns_name: add.sns_name,
      pref: add.pref,
    }

    addUser(payload)

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

  const handleLink = (link:string) => {
    //　登録で一時的に保存していたStateを削除
    dispatch(addUserRemove())
    history.push(link)
  }

  return (
    <div className="App">
      <Header />
      <div id="add-user-area">
        <h1 className="text-center ">新規会員登録</h1>
        <div className="form-wrap">
          <p>会員登録ありがとうございます！</p>
          <p>様々なイベントに参加しよう！</p>
          <p onClick={() => handleLink("/mypage")}>マイページ</p>
          <p onClick={() => handleLink("/")}>トップページ</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddThanks;
