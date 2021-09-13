import {user} from '../../../constants/api';
import {GET_USER_PROFILE_SUCC} from "../../types";
import {checkAxiosResponse} from "../../../helpers";


/*
    word_word_word => this is templete for api
    WORD_WORD_WORD => this is templete for types
    wordWordWord => this is templete for action functions name
 */
export const getUserProfile = username => dispatch => checkAxiosResponse(dispatch, user + username, GET_USER_PROFILE_SUCC);
