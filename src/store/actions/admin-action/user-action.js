import {admin_users, search_users} from '../../../constants/adminApi';
import {GET_USERS_SUCC, SEARCH_USERS_SUCC} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";


export const getUsers = (token, query = '') => dispatch => checkAxiosResponse(dispatch, `${admin_users}${query}`, GET_USERS_SUCC,
    'get', token);

export const searchUsers = token => dispatch => checkAxiosResponse(dispatch, search_users, SEARCH_USERS_SUCC, 'get', token);


