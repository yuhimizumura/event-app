import {API, graphqlOperation} from "aws-amplify";
import {getEvent, getEventMaster, getUser} from "../../graphql/queries";
import {createUser, updateUser} from "../../graphql/mutations";

export const fetchEvent = async (id:string) => {
    return await API.graphql(graphqlOperation(getEvent,{
        user_id:id
    }))
}
