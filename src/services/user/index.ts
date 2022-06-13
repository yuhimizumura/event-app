import {API, graphqlOperation} from "aws-amplify";
import {getUser} from "../../graphql/queries";

export const fetchUser = async (id:string) => {
    return await API.graphql(graphqlOperation(getUser,{
        id:id
    }))
}