import {
    SET_HOME_SLIDES,
    SET_MAIN_SETTINGS_SUCC, SET_SETTINGS_SUCC
} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";
import {about, contact_us, home_slides, main_settings, set_product_attributes} from "../../../constants/adminApi";

export const setMainSettings = (token, data) => dispatch => checkAxiosResponse(dispatch, main_settings,
    SET_MAIN_SETTINGS_SUCC, 'post', token, data);

export const setHomeSlides = (token, data) => dispatch => checkAxiosResponse(dispatch, home_slides,
    SET_HOME_SLIDES, 'post', token, data);

export const setAbout = (token, data) => dispatch => checkAxiosResponse(dispatch, about,
    SET_SETTINGS_SUCC, 'post', token, data);

export const setProductAttributes = token => dispatch => checkAxiosResponse(dispatch, set_product_attributes,
    SET_SETTINGS_SUCC, 'post', token);

export const setContactUs = (token, data) => dispatch => checkAxiosResponse(dispatch, contact_us,
    SET_SETTINGS_SUCC, 'post', token, data);
