import {API, graphqlOperation} from "aws-amplify";
import {
    eventByEventId,
    eventByUserId,
    getEvent,
    getEventMaster,
    getUser,
    listEventMasters
} from "../../graphql/queries";
import {createUser, updateUser} from "../../graphql/mutations";

export const fetchEvent = async (id:string) => {
    return await API.graphql(graphqlOperation(eventByUserId,{
        user_id:id,
    }))
}

export const getEventListMasters = async () => {
    return await API.graphql(graphqlOperation(listEventMasters))
}

export const fetchEventMaster = async (id:string) => {
    return await API.graphql(graphqlOperation(getEventMaster,{
        id:id,
    }))
}

export const fetchEventByEventId = async (id:string) => {
    return await API.graphql(graphqlOperation(eventByEventId,{
        event_id:id,
    }))
}