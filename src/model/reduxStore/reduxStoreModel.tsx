import {addUserModel, signInUserModel} from "../user/UserModel";
import {authStatusModel} from "../auth/AuthModel";

export type storeModel = {
    addUser:addUserModel,
    authStatus:authStatusModel,
    signInUser:signInUserModel,
    _persist: any
}

