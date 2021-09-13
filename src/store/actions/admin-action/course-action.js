import {checkAxiosResponse} from "../../../helpers";
import {admin_courses, add_file_to_course, edit_course, create_course} from "../../../constants/adminApi";
import {CREATE_COURSE_SUCC, GET_COURSE_SUCC, GET_COURSES_SUCC, UPDATE_COURSE_SUCC} from "../../admin-types";

export const getCourses = token => dispatch => checkAxiosResponse(dispatch, admin_courses, GET_COURSES_SUCC, 'get', token);

export const getCourse = (token, slug) => dispatch => checkAxiosResponse(dispatch, edit_course + slug, GET_COURSE_SUCC, 'get', token);

export const createCourse = (token, data) => dispatch => checkAxiosResponse(dispatch, create_course, CREATE_COURSE_SUCC, 'post', token, data)

export const updateCourse = (token, slug, data) => dispatch => checkAxiosResponse(
    dispatch, edit_course + slug, UPDATE_COURSE_SUCC, 'post', token, data)

export const addFileToCourse = (token, slug, data) => dispatch => checkAxiosResponse(dispatch, add_file_to_course + slug, CREATE_COURSE_SUCC, 'post', token, data)