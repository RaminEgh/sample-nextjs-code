import {ADD_TEACHER_SUCC, GET_TEACHERS_SUCC, SEARCH_TEACHERS_SUCC} from "../../admin-types";
import {successState} from "../../../helpers";


const initialState = {
    teachers: [],
    pagination: null,
}

const teacherReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TEACHERS_SUCC:
            return successState(state, payload, {teachers: payload.items, pagination: payload.pagination})
        case SEARCH_TEACHERS_SUCC:
            return successState(state, payload, {teachers: payload})
        case ADD_TEACHER_SUCC:
            return successState(state, payload)
        default:
            return state
    }
}

export default teacherReducer;