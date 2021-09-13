import {ADD_CATEGORY_SUCC, GET_CATEGORIES_SUCC, GET_CATEGORY_TYPES_SUCC} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";
import {admin_add_category, admin_categories, admin_category_types} from "../../../constants/adminApi";


export const getCategories = (token, query = '') => dispatch => checkAxiosResponse(dispatch,
    `${admin_categories}${query}`, GET_CATEGORIES_SUCC,
    'get', token);

export const getCategoryTypes = (token) => dispatch => checkAxiosResponse(dispatch,
    admin_category_types, GET_CATEGORY_TYPES_SUCC,
    'get', token);

export const addCategory = (token, data) => dispatch => checkAxiosResponse(dispatch, admin_add_category, ADD_CATEGORY_SUCC,
    'post', token, data)

