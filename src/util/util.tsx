import {Auth, Storage} from "aws-amplify";
import {useDispatch} from "react-redux";
import {addUserRemove} from "../redux/actions/add";
import {signInUserRemove} from "../redux/actions/user";
import {useHistory} from "react-router-dom";

export const isEmpty = (obj:any) => {
    if (obj === null || obj === undefined) {
        return {}
    }
    return !Object.keys(obj).length;
}

export const getAccessToken = async () => {
    const accessToken = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        return data.getAccessToken().getJwtToken()
    }).catch(error => {
        console.log(error)
    })
    return await accessToken
}

export const getIdToken = async () => {
    const idToken = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        return data.getIdToken().getJwtToken()
    }).catch(error => {
        console.log(error)
    })
    return await idToken
}

export const getRefreshToken = async () => {
    const refreshToken = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        return data.getRefreshToken().getToken()
    }).catch(error => {
        console.log(error)
    })
    return await refreshToken
}

export const getUserId = async () => {
    const id = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        return data.getAccessToken().payload.username
    }).catch(error => {
        console.log(error)
    })
    return await id
}

export const getUserEmail = async () => {
    const id = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        return data.getIdToken().payload.email
    }).catch(error => {
        console.log(error)
    })
    return await id
}

export const getUserInfo = async (key:string) => {
    const res = Auth.currentSession().then(data => {
        if(isEmpty(data)) throw new Error("not User")
        switch (key) {
            case "id":
                return data.getAccessToken().payload.username
            case "email":
                return data.getIdToken().payload.email
            case "tel":
                return data.getIdToken().payload.phone_number
        }
        throw new Error("not matched key")
    }).catch(error => {
        console.log(error)
    })
    return await res
}

export const prefList = {
    "pref": [
        {"code": 1, "name": "北海道"},
        {"code": 2, "name": "青森県"},
        {"code": 3, "name": "岩手県"},
        {"code": 4, "name": "宮城県"},
        {"code": 5, "name": "秋田県"},
        {"code": 6, "name": "山形県"},
        {"code": 7, "name": "福島県"},
        {"code": 8, "name": "茨城県"},
        {"code": 9, "name": "栃木県"},
        {"code": 10, "name": "群馬県"},
        {"code": 11, "name": "埼玉県"},
        {"code": 12, "name": "千葉県"},
        {"code": 13, "name": "東京都"},
        {"code": 14, "name": "神奈川県"},
        {"code": 15, "name": "新潟県"},
        {"code": 16, "name": "富山県"},
        {"code": 17, "name": "石川県"},
        {"code": 18, "name": "福井県"},
        {"code": 19, "name": "山梨県"},
        {"code": 20, "name": "長野県"},
        {"code": 21, "name": "岐阜県"},
        {"code": 22, "name": "静岡県"},
        {"code": 23, "name": "愛知県"},
        {"code": 24, "name": "三重県"},
        {"code": 25, "name": "滋賀県"},
        {"code": 26, "name": "京都府"},
        {"code": 27, "name": "大阪府"},
        {"code": 28, "name": "兵庫県"},
        {"code": 29, "name": "奈良県"},
        {"code": 30, "name": "和歌山県"},
        {"code": 31, "name": "鳥取県"},
        {"code": 32, "name": "島根県"},
        {"code": 33, "name": "岡山県"},
        {"code": 34, "name": "広島県"},
        {"code": 35, "name": "山口県"},
        {"code": 36, "name": "徳島県"},
        {"code": 37, "name": "香川県"},
        {"code": 38, "name": "愛媛県"},
        {"code": 39, "name": "高知県"},
        {"code": 40, "name": "福岡県"},
        {"code": 41, "name": "佐賀県"},
        {"code": 42, "name": "長崎県"},
        {"code": 43, "name": "熊本県"},
        {"code": 44, "name": "大分県"},
        {"code": 45, "name": "宮崎県"},
        {"code": 46, "name": "鹿児島県"},
        {"code": 47, "name": "沖縄県"}]
}

export const ageList = {
    "age": [
        {"code": 1, "name": "10代"},
        {"code": 2, "name": "20代"},
        {"code": 3, "name": "30代"},
        {"code": 4, "name": "40代"},
        {"code": 5, "name": "50代"},
        {"code": 6, "name": "60代"},
        {"code": 7, "name": "70代"},
        {"code": 8, "name": "それ以上"},
        {"code": 9, "name": "未回答"},
        ]
}

export const categoryData = [
    {
        key: '1',
        name: '車',
        icon: 'fa-solid fa-car'
    },
    {
        key: '2',
        name: 'バイク',
        icon: 'fa-solid fa-motorcycle'
    },
    {
        key: '3',
        name: '自転車',
        icon: 'fa-solid fa-bicycle'
    },
    {
        key: '4',
        name: 'アウトドア',
        icon: 'fa-solid fa-campground'
    },
    {
        key: '5',
        name: '音楽',
        icon: 'fa-solid fa-music'
    },
    {
        key: '6',
        name: 'カメラ',
        icon: 'fa-solid fa-camera'
    },
    {
        key: '7',
        name: '食べ物',
        icon: 'fa-solid fa-utensils'
    },
    {
        key: '8',
        name: 'アニメ',
        icon: 'fa-solid fa-tv'
    },
    {
        key: '9',
        name: '旅行',
        icon: 'fa-solid fa-person-walking-luggage'
    },
    {
        key: '10',
        name: 'その他',
        icon: 'fa-solid fa-alien-8bit'
    },
]


export const fetchS3Objects = async () => {
    const currentCredentials = await Auth.currentCredentials()
    const identityId = currentCredentials.identityId
    return Storage.list('', {
        level: 'private',
        identityId: identityId // the identityId of that user
    })
        .then(
            result => {
                return result
            }
        )
        .catch(
            err => console.log(err)
        );
}
