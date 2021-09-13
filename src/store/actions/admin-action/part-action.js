import {admin_parts} from '../../../constants/adminApi';
import {GET_PART_SUCC, UPDATE_PART_SUCC} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";


export const getPart = (token, slug) => dispatch => checkAxiosResponse(dispatch, `${admin_parts}/${slug}`, GET_PART_SUCC,
    'get', token);

export const updatePart = (token, slug, data) => dispatch => checkAxiosResponse(dispatch, `${admin_parts}/${slug}`, UPDATE_PART_SUCC,
    'post', token, data);

