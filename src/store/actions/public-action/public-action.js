import {home} from '../../../constants/api';
import {GET_HOME_PAGE_SUCC} from "../../types";
import {checkAxiosResponse} from "../../../helpers";


/*
    word_word_word => this is templete for api
    WORD_WORD_WORD => this is templete for types
    wordWordWord => this is templete for action functions name
 */
export const getHomePage = () => dispatch => checkAxiosResponse(dispatch, home, GET_HOME_PAGE_SUCC);
