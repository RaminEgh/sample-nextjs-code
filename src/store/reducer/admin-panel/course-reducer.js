import {successState} from "../../../helpers";

const initialState = {
    courses: [],
    course: null,
    hashPart: null,
    parts: [],
    chapters: [],
    files: [],
}

const courseReducer =  (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_COURSES_SUCC:
            return successState(state, payload, {courses: payload.courses})
        case GET_COURSE_SUCC:
            return successState(state, payload, {course: payload.course,
                parts: payload.parts,
                chapters: payload.chapters,
                files: payload.files
            })
        case ADD_PART_TO_COURSE_SUCC:
            return successState(state, payload, { hashPart: payload.hash})
        case UPDATE_COURSE_SUCC:
            return successState(state, payload)
        default:
            return state
    }
}

export default courseReducer;
