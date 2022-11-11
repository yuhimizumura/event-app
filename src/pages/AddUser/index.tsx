import React, {ChangeEvent, Dispatch, FormEvent, RefObject, useEffect, useRef, useState} from 'react';
import Header from "../../component/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo, prefList, ageList, changeFormatNumber,} from "../../util/util";
import Footer from "../../component/footer/Footer";
import {useHistory} from "react-router-dom";
import addUserSet from "../../redux/actions/add";
import {storeModel} from "../../model/reduxStore/reduxStoreModel";
import {addUserModel, signInUserModel} from "../../model/user/UserModel";

const AddUser:React.VFC = () => {

    const state:storeModel = useSelector((state:storeModel) => state)
    const history:any = useHistory();
    const dispatch:Dispatch<any> = useDispatch()

    const addUser:addUserModel   = state.addUser
    const [id,setId]             = useState<string>("")
    const [email,setEmail]       = useState<string>("")
    const [tel1,setTel1]         = useState<string>(addUser.tel1 !== undefined && addUser.tel1 !== "" ? addUser.tel1 : "")
    const [tel2,setTel2]         = useState<string>(addUser.tel2 !== undefined && addUser.tel2 !== "" ? addUser.tel2 : "")
    const [tel3,setTel3]         = useState<string>(addUser.tel3 !== undefined && addUser.tel3 !== "" ? addUser.tel3 : "")
    const [sei,setSei]           = useState<string>(addUser.sei !== undefined && addUser.sei !== "" ? addUser.sei : "")
    const [gender,setGender]     = useState<string>(addUser.gender !== undefined && addUser.gender !== "" ? addUser.gender : "")
    const [age,setAge]           = useState<string>(addUser.age !== undefined && addUser.age !== "" ? addUser.age : "")
    const [sns,setSns]           = useState<string>(addUser.sns !== undefined && addUser.sns !== "" ? addUser.sns : "")
    const [sns_name,setSns_name] = useState<string>(addUser.sns_name !== undefined && addUser.sns_name !== "" ? addUser.sns_name : "")
    const [pref,setPref]         = useState<string>(addUser.pref !== undefined &&addUser.pref !== "" ? addUser.pref : "")
    const [isSubmit,setIsSubmit] = useState<boolean>(false)

    //Error
    const [errorSei,setErrorSei]       = useState<string>("")
    const [errorEmail,setErrorEmail]   = useState<string>("")
    const [errorGender,setErrorGender] = useState<string>("")
    const [errorAge,setErrorAge]       = useState<string>("")
    const [errorTel1,setErrorTel1]     = useState<string>("")
    const [errorTel2,setErrorTel2]     = useState<string>("")
    const [errorTel3,setErrorTel3]     = useState<string>("")
    const [errorPref,setErrorPref]     = useState<string>("")
    const [errorSns,setErrorSns]       = useState<string>("")

    //Ref
    const refName:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const refTel2:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const refTel3:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);


    /**
     * 初回読み込み時
     * ユーザ情報取得 ? 新規入力画面 : トップページへ
     */
    useEffect(() => {
        let unmounted:boolean = false
        if (!unmounted) {
            window.scrollTo(0, 0)
            refName.current?.focus()
            getUserInfo("id").then((data: string) => {
                if (data == undefined) {
                    history.push("/")
                }
                setId(data)
            })

            getUserInfo("email").then(data => {
                setEmail(data)
            })
        }

        return () => {
            unmounted = true
        }

    },[])

    /**
     * ユーザIDを取得してStoreに保存
     */
    useEffect(() => {
        let unmounted:boolean = false
        if (!unmounted) {
            if (id !== undefined || id !== "") {
                const payload:addUserModel = {
                    "id": id,
                }

                dispatch(addUserSet(payload))
            }
        }
        return () => {
            unmounted = true
        }
    },[id])

    /**
     * 入力されるデータを一元管理し、ボタンの状態を選択
     */
    useEffect(() => {
       let unmounted:boolean = false

       if (!unmounted) {
           let error: boolean = false
           let error2: boolean = true

           if (
               errorSei === "" &&
               errorEmail === "" &&
               errorGender === "" &&
               errorAge === "" &&
               errorTel1 === "" &&
               errorTel2 === "" &&
               errorTel3 === "" &&
               errorPref === "" &&
               errorSns === "") {
               error = true
           }

           if (
               sei === "" || sei === undefined ||
               email === "" || email === undefined ||
               gender === "" || gender === undefined ||
               age === "" || age === undefined ||
               tel1 === "" || tel1 === undefined ||
               tel2 === "" || tel2 === undefined ||
               tel3 === "" || tel3 === undefined ||
               pref === "" || pref === undefined ||
               sns === "" || sns === undefined
           ) {
               error2 = false
           }

           if (error && error2) {
               setIsSubmit(true)
           } else {
               setIsSubmit(false)
           }
       }

        return () => {
            unmounted = true
        }
    },[sei,email,gender,age,tel1,tel2,tel3,pref,sns,errorSei,errorEmail,errorGender,errorAge,errorTel1,errorTel2,errorTel3,errorPref,errorSns])


    /**
     * 自由入力テキストのバリデーション及びセット
     * @param {ChangeEvent<HTMLInputElement>} event 入力変更イベント
     * @param {string} key 入力タイプ
     */
    const handleSetInput = (event:ChangeEvent<HTMLInputElement>,key:string) => {
        const val:string = event.target.value
        switch (key) {
            case "sei":
                setSei(val)
                nameValidation(val)
                break
            case "gender":
                setGender(val)
                genderValidation(val)
                break
            case "tel1":
                setTel1(changeFormatNumber(val))
                tel1Validation(changeFormatNumber(val))
                if(val.indexOf('090') !== -1 || val.indexOf('080') !== -1 || val.indexOf('070') !== -1 || val.length === 4){
                    refTel2.current?.focus()
                }
                break
            case "tel2":
                setTel2(changeFormatNumber(val))
                tel2Validation(changeFormatNumber(val))
                if(val.length === 4){
                    refTel3.current?.focus()
                }
                break
            case "tel3":
                setTel3(changeFormatNumber(val))
                tel3Validation(changeFormatNumber(val))
                break
            case "sns":
                setSns(val)
                snsValidation(val)
                break
            case "sns_name":
                setSns_name(val)
                break
        }
    }

    /**
     * 選択形式のバリデーション及びセット
     * @param {ChangeEvent<HTMLSelectElement>} event 選択変更イベント
     * @param {string} key 入力タイプ
     */
    const handleSetSelect = (event:ChangeEvent<HTMLSelectElement>,key:string) => {
        const val:string = event.target.value
        switch (key) {
            case "age":
                setAge(val)
                ageValidation(val)
                break
            case "pref":
                setPref(val)
                prefValidation(val)
                break
        }
    }

    /**
     * お名前バリデーション
     * @param {string} str 入力文字列
     */
    const nameValidation = (str:string) => {
        if (str === undefined || str.length < 1) {
            setErrorSei("お名前を入力してください。")
        } else if (str.length > 32) {
            setErrorSei("お名前を32文字以内で入力してください。")
        } else {
            setErrorSei("")
        }
    }

    /**
     * メールバリデーション
     * @param {string} str 入力文字列
     */
    const mailValidation = (str:string) => {
        if (str === undefined || str.length < 1) {
            setErrorEmail("Emailを入力してください。")
        } else if (str.length > 128) {
            setErrorEmail("Emailを10文字以内で入力してください。")
        } else {
            setErrorEmail("")
        }
    }

    /**
     * 性別バリデーション
     * @param {string} str 入力文字列
     */
    const genderValidation = (str:string) => {
        if (str === undefined || str === "0") {
            setErrorGender("性別を選択してください。")
        } else if (str.length > 5) {
            setErrorGender("性別を正しく選択してください。")
        } else {
            setErrorGender("")
        }
    }

    /**
     * 年代バリデーション
     * @param {string} str 入力文字列
     */
    const ageValidation = (str:string) => {
        if (str === undefined || str === "0") {
            setErrorAge("年代を選択してください。")
        } else if (str.length > 5) {
            setErrorAge("年代を正しく選択してください。")
        } else {
            setErrorAge("")
        }
    }

    /**
     * 電話番号1バリデーション
     * @param {string} str 入力文字列
     */
    const tel1Validation = (str:string) => {
        if (str === undefined || str.length < 1) {
            setErrorTel1("電話番号1を入力してください。")
        } else if (str.length > 4) {
            setErrorTel1("電話番号1を4桁以下で入力してください。")
        } else {
            setErrorTel1("")
        }
    }

    /**
     * 電話番号2バリデーション
     * @param {string} str 入力文字列
     */
    const tel2Validation = (str:string) => {
        if (str === undefined || str.length < 1) {
            setErrorTel2("電話番号2を入力してください。")
        } else if (str.length > 4) {
            setErrorTel2("電話番号2を4桁以下で入力してください。")
        } else {
            setErrorTel2("")
        }
    }

    /**
     * 電話番号3バリデーション
     * @param {string} str 入力文字列
     */
    const tel3Validation = (str:string) => {
        if (str === undefined || str.length < 1) {
            setErrorTel3("電話番号3を入力してください。")
        } else if (str.length > 4) {
            setErrorTel3("電話番号3を4桁以下で入力してください。")
        } else {
            setErrorTel3("")
        }
    }

    /**
     * 都道府県バリデーション
     * @param {string} str 入力文字列
     */
    const prefValidation = (str:string) => {
        if (str === undefined || str === "0") {
            setErrorPref("都道府県を選択してください。")
        } else if (str.length > 5) {
            setErrorPref("都道府県を正しく選択してください。")
        } else {
            setErrorPref("")
        }
    }

    /**
     * snsバリデーション
     * @param {string} str 入力文字列
     */
    const snsValidation = (str:string) => {
        if (str === undefined || str === "0") {
            setErrorSns("snsを選択してください。")
        } else if (str.length > 10) {
            setErrorSns("snsを正しく選択してください。")
        } else {
            setErrorSns("")
        }
    }

    /**
     * submit関数
     */
    const handleSubmit = () => {
        const payload:addUserModel = {
            "id": id,
            "sei": sei,
            "email": email,
            "gender": gender,
            "age" : age,
            "tel1": tel1,
            "tel2": tel2,
            "tel3": tel3,
            "sns":sns,
            "sns_name": sns_name,
            "pref": pref,
            "profile":"よろしくお願いいたします。"
        }

        nameValidation(sei)
        mailValidation(email)
        genderValidation(gender)
        ageValidation(age)
        tel1Validation(tel1)
        tel2Validation(tel2)
        tel3Validation(tel3)
        prefValidation(pref)
        snsValidation(sns)
        dispatch(addUserSet(payload))

        if (isSubmit) {
            history?.push({ pathname: '/add-confirm', state: payload})
        }

    }

    return (
        <div className="App">
            <Header />
            <div id="add-user-area">
                <h1 className="text-center ">新規会員登録</h1>
                <form className="form-wrap">
                    <input type="hidden" name="id" value={id}/>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="sei">お名前<span className="text-small ml-1">※ニックネーム可</span></label>
                            </div>
                            <div className="form_td">
                                <input ref={refName} defaultValue={sei !== "" ? sei : ""} onChange={(event) => handleSetInput(event,"sei")} id="sei" type="text" name="sei" className="input mr-2 g-2"/>
                                { errorSei !== "" &&
                                    <p className="error">{errorSei}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form_td">
                                <input onChange={(event) => handleSetInput(event,"email")} id="email" type="email" name="email" value={email} disabled={true} className="input g-1" />
                                { errorEmail !== "" &&
                                    <p className="error">{errorEmail}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="gender">性別</label>
                            </div>
                            <div className="form_td">
                                <div className="d-flex">
                                    <div className="radio-label">
                                        <label htmlFor="gender1" className="mr-px-5 radio-label">男性</label>
                                        <input checked={gender === "男性"} onChange={(event) => handleSetInput(event,"gender")} id="gender1" value="男性" type="radio" name="gender" className="input radio"/>
                                    </div>
                                    <div className="radio-label">
                                        <label htmlFor="gender2" className="mr-px-5 radio-label">女性</label>
                                        <input checked={gender === "女性"} onChange={(event) => handleSetInput(event,"gender")} id="gender2" value="女性" type="radio" name="gender" className="input radio"/>
                                    </div>
                                    <div className="radio-label">
                                        <label htmlFor="gender3" className="mr-px-5 radio-label">その他</label>
                                        <input checked={gender === "その他"} onChange={(event) => handleSetInput(event,"gender")} id="gender3" value="その他" type="radio" name="gender" className="input radio"/>
                                    </div>
                                </div>
                                { errorGender !== "" &&
                                    <p className="error">{errorGender}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="age">年代</label>
                            </div>
                            <div className="form_td">
                                <select value={age} name="age" id="age" onChange={(event) => handleSetSelect(event,"age")}>
                                    <option value="0">年代を選択してください</option>
                                    {
                                        ageList.age.map(val => {
                                            return <option key={val.code} value={val.name}>{val.name}</option>
                                        })
                                    }
                                </select>
                                { errorAge !== "" &&
                                    <p className="error">{errorAge}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="tel">電話番号</label>
                            </div>
                            <div className="form_td">
                                <input size={4} maxLength={4} onChange={(event) => handleSetInput(event,"tel1")} id="tel1" type="tel" name="tel1" defaultValue={tel1 !== "" ? tel1 : ""} className="input g-3" />
                                <span className="mx-px-10">-</span>
                                <input ref={refTel2} size={4} maxLength={4} onChange={(event) => handleSetInput(event,"tel2")} id="tel2" type="tel" name="tel2" defaultValue={tel2 !== "" ? tel2 : ""} className="input g-3"/>
                                <span className="mx-px-10">-</span>
                                <input ref={refTel3} size={4} maxLength={4} onChange={(event) => handleSetInput(event,"tel3")} id="tel3" type="tel" name="tel3" defaultValue={tel3 !== "" ? tel3 : ""} className="input g-3"/>
                                { errorTel1 !== "" &&
                                    <p className="error">{errorTel1}</p>
                                }
                                { errorTel2 !== "" &&
                                    <p className="error">{errorTel2}</p>
                                }
                                { errorTel3 !== "" &&
                                    <p className="error">{errorTel3}</p>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="gender">SNS<span className="text-small ml-1">※一番よく使うSNS</span></label>
                            </div>
                            <div className="form_td">
                                <div className="d-flex">
                                    <div className="radio-label">
                                        <label htmlFor="sns1" className="mr-px-5">Twitter</label>
                                        <input checked={sns === "Twitter"} onChange={(event) => handleSetInput(event,"sns")} id="sns1" value="Twitter" type="radio" name="sns" className="input radio"/>
                                    </div>
                                    <div className="radio-label">
                                        <label htmlFor="sns2" className="mr-px-5">Instagram</label>
                                        <input checked={sns === "Instagram"} onChange={(event) => handleSetInput(event,"sns")} id="sns2"　value="Instagram" type="radio" name="sns" className="input radio"/>
                                    </div>
                                    <div className="radio-label">
                                        <label htmlFor="sns3" className="mr-px-5">その他</label>
                                        <input checked={sns === "その他"} onChange={(event) => handleSetInput(event,"sns")} id="sns3"　value="その他" type="radio" name="sns" className="input radio"/>
                                    </div>
                                    <div className="radio-label">
                                        <label htmlFor="sns4" className="mr-px-5">未回答</label>
                                        <input checked={sns === "未回答"} onChange={(event) => handleSetInput(event,"sns")} id="sns4" value="未回答" type="radio" name="sns" className="input radio"/>
                                    </div>
                                </div>

                                {/*<div className="d-flex-row dispSp">*/}
                                {/*    <div className="radio-label">*/}
                                {/*        <label htmlFor="sns1" className="mr-px-5">Twitter</label>*/}
                                {/*        <input checked={sns === "Twitter"} onChange={(event) => handleSetInput(event,"sns")} id="sns1" value="Twitter" type="radio" name="sns" className="input radio"/>*/}
                                {/*    </div>*/}
                                {/*    <div className="radio-label ml-1">*/}
                                {/*        <label htmlFor="sns2" className="mr-px-5">Instagram</label>*/}
                                {/*        <input checked={sns === "Instagram"} onChange={(event) => handleSetInput(event,"sns")} id="sns2"　value="Instagram" type="radio" name="sns" className="input radio"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<div className="d-flex-row dispSp mt-1">*/}
                                {/*    <div className="radio-label">*/}
                                {/*        <label htmlFor="sns3" className="mr-px-5">その他</label>*/}
                                {/*        <input checked={sns === "その他"} onChange={(event) => handleSetInput(event,"sns")} id="sns3"　value="その他" type="radio" name="sns" className="input radio"/>*/}
                                {/*    </div>*/}
                                {/*    <div className="radio-label ml-1">*/}
                                {/*        <label htmlFor="sns4" className="mr-px-5">未回答</label>*/}
                                {/*        <input checked={sns === "未回答"} onChange={(event) => handleSetInput(event,"sns")} id="sns4" value="未回答" type="radio" name="sns" className="input radio"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                { errorSns !== "" &&
                                    <p className="error">{errorSns}</p>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <label htmlFor="sei">SNSアカウント名</label>
                            </div>
                            <div className="form_td">
                                <span className="mr-1">@</span><input defaultValue={sns_name !== "" ? sns_name : ""} onChange={(event) => handleSetInput(event,"sns_name")} id="sns_name" type="text" name="sns_name" className="input mr-2 g-2"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex w-100">
                            <div className="form_th">
                                <span className="required">必須</span>
                                <label htmlFor="pref">都道府県</label>
                            </div>
                            <div className="form_td">
                                <select value={pref} name="pref" id="pref" onChange={(event) => handleSetSelect(event,"pref")}>
                                    <option value="0">都道府県を選択してください</option>
                                    {
                                        prefList.pref.map(val => {
                                            return <option key={val.code} value={val.name}>{val.name}</option>
                                        })
                                    }
                                </select>
                                { errorPref !== "" &&
                                    <p className="error">{errorPref}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <button type="button" className={`w-25 mt-2 mx-auto d-block ${isSubmit ? 'add-button' : 'back-button'}`} onClick={handleSubmit}>確認画面へ</button>
                </form>
            </div>
        <Footer />
        </div>
    );
}

export default AddUser;
