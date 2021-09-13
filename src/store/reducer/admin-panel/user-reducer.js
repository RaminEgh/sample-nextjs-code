import {GET_USERS_SUCC, SEARCH_USERS_SUCC} from "../../admin-types";
import {successState} from "../../../helpers";


const initialState = {
    users: [],
    pagination: null,
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS_SUCC:
            return successState(state, payload, {users: payload.items, pagination: payload.pagination})
        case SEARCH_USERS_SUCC:
            return successState(state, payload, {users: payload})
        default:
            return state
    }
}

export default userReducer;