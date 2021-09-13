import {checkAxiosResponse} from "../../../helpers";
import {ACTION_SUCCESS, GET_USER_SUCC, UPDATE_USER_SUCC} from "../../types";
import {change_password, get_user, update_user} from "../../../constants/api";

export const updateUser = (token, data) => dispatch => checkAxiosResponse(dispatch, update_user, UPDATE_USER_SUCC,
    'post', token, data);

export const getUser = (token) => dispatch => checkAxiosResponse(dispatch, get_user, GET_USER_SUCC,
    'get', token);


export const changePassword = (token, data) => dispatch => checkAxiosResponse(dispatch, change_password, ACTION_SUCCESS,
    'post', token, data);