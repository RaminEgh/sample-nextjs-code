import {signin, signout, signup} from '../../../constants/api';
import {checkAxiosResponse} from "../../../helpers";
import {LOGIN_SUCC, REGISTER_SUCC, SIGN_OUT_SUCC} from "../../types";


export const login = data => dispatch => checkAxiosResponse(dispatch, signin, LOGIN_SUCC, 'post', null, data);

export const register = data => dispatch => checkAxiosResponse(dispatch, signup, REGISTER_SUCC, 'post', null, data);

export const jwtSignout = (token) => dispatch => checkAxiosResponse(dispatch, signout, SIGN_OUT_SUCC, 'get', token);