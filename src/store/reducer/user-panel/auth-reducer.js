import {ACTION_SUCCESS} from "../../types";
import {successState} from "../../../helpers";

const initialState = {

}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_SUCCESS:
            return successState(state, payload)
        default:
            return state
    }
}

export default authReducer;
