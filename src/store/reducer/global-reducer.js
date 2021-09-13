import {FAIL, LOADING, RESET, SUCCESS} from "../types";


const initialState = {
    errors: false,
    messages: null,
    loading: false,
    type: 'success',
}

const globalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SUCCESS:
            return {
                ...state,
                loading: false,
                errors: false,
                messages: payload?.message,
                type: payload?.type || payload?.status ? 'success' : 'error',
                code: payload?.code,
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                errors: false,
                messages: null
            }
        case RESET:
            return {
                ...state,
                loading: false,
                errors: false,
                messages: null
            }
        case FAIL:
            return {
                ...state,
                loading: false,
                errors: payload?.errors,
                type: 'error',
                messages: payload?.message || payload
            }
        default:
            return state
    }
}

export default globalReducer;