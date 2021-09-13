import {GET_HOME_PAGE_SUCC} from "../../types";
import {successState} from "../../../helpers";

const initialState = {
    courses: [],
}

const homeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_HOME_PAGE_SUCC:
            return successState(state, payload, {courses: payload.data.courses})
        default:
            return state
    }
}

export default homeReducer;