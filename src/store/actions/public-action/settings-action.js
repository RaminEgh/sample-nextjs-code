import {
    GET_ABOUT_SUCC, GET_CONTACT_SUCC,
    GET_HOME_SLIDES, GET_MAIN_SETTINGS_SUCC
} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";
import {about, contact, home_slides, main_settings} from "../../../constants/api";


export const getMainSettings = token => dispatch => checkAxiosResponse(dispatch, main_settings, GET_MAIN_SETTINGS_SUCC,
    'get');


export const getHomeSlides = (token, data) => dispatch => checkAxiosResponse(dispatch, home_slides,
    GET_HOME_SLIDES, 'get');

export const getAbout = () => dispatch => checkAxiosResponse(dispatch, about,
    GET_ABOUT_SUCC, 'get');

export const getContact = () => dispatch => checkAxiosResponse(dispatch, contact,
    GET_CONTACT_SUCC, 'get');
