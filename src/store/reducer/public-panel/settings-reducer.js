import {successState} from "../../../helpers";
import {GET_ABOUT_SUCC, GET_CONTACT_SUCC, GET_HOME_SLIDES, GET_MAIN_SETTINGS_SUCC} from "../../admin-types";

const initialState = {
    main: null,
    homeSlides: null,
    about: null,
    contact: null,
}

const settingsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MAIN_SETTINGS_SUCC:
            return successState(state, payload, {main: payload.data.main})
        case GET_HOME_SLIDES:
            return successState(state, payload, {homeSlides: payload.data})
        case GET_ABOUT_SUCC:
            return successState(state, payload, {about: payload})
        case GET_CONTACT_SUCC:
            return successState(state, payload, {contact: payload})
        default:
            return state
    }
}

export default settingsReducer;