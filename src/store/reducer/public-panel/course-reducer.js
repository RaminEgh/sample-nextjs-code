import {GET_COURSE_SUCC, GET_COURSES_SUCC} from "../../types";
import {successState} from "../../../helpers";

const initialState = {
    courses: [],
    course: null,
    hashPart: null,
}

const courseReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_COURSES_SUCC:
            return successState(state, payload, {courses: payload})
        case GET_COURSE_SUCC:
            return successState(state, payload, {course: payload})
        default:
            return state
    }
}

export default courseReducer;
