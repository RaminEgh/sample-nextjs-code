import {add_part_to_course, search_teachers} from '../../../constants/adminApi';
import {ADD_PART_TO_COURSE_SUCC, SEARCH_TEACHERS_SUCC,
} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";


export const addPartToCourse = (token, slug, data) => dispatch => checkAxiosResponse(dispatch, add_part_to_course + slug, ADD_PART_TO_COURSE_SUCC, 'post', token, data);

export const searchTeachers = token => dispatch => checkAxiosResponse(dispatch, search_teachers, SEARCH_TEACHERS_SUCC, 'get', token);

