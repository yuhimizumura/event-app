import {API, graphqlOperation} from "aws-amplify";
import {getUser} from "../../graphql/queries";
import {createUser, updateUser} from "../../graphql/mutations";

export const fetchUser = async (id:string) => {
    return await API.graphql(graphqlOperation(getUser,{
        id:id
    }))
}

export const addUser = async(payload:any) => {
    return await API.graphql(graphqlOperation(createUser,{
        input:payload
    }))
}

export const upUser = async(payload:any) => {
    return await API.graphql(graphqlOperation(updateUser,{
        input:payload
    }))
}