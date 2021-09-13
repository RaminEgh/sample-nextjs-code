import {admin_add_teacher, admin_teachers, admin_users} from '../../../constants/adminApi';
import {ADD_TEACHER_SUCC, GET_TEACHERS_SUCC} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";


export const getTeachers = (token, query = '') => dispatch => checkAxiosResponse(dispatch, `${admin_teachers}${query}`, GET_TEACHERS_SUCC,
    'get', token);

export const addTeacher = (token, userId) => dispatch => checkAxiosResponse(dispatch, `${admin_add_teacher}${userId}`, ADD_TEACHER_SUCC,
    'post', token);



