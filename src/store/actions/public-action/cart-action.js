import {cart} from '../../../constants/api';
import {ADD_TO_CART_SUCC, GET_CART_SUCC, REMOVE_FROM_CART_SUCC} from "../../types";
import {checkAxiosResponse} from "../../../helpers";


/*
    word_word_word => this is templete for api
    WORD_WORD_WORD => this is templete for types
    wordWordWord => this is templete for action functions name
 */

let hash;
if (typeof window !== "undefined")
    hash = window.localStorage.getItem('cartHash')


export const getCart = token => dispatch => checkAxiosResponse(dispatch, cart, GET_CART_SUCC, 'get', token,
    {hash})

export const addToCart = (slug, token) => dispatch => checkAxiosResponse(dispatch, cart + `/${slug}`, ADD_TO_CART_SUCC,
    'post', token, {hash})

export const removeFromCart = (slug, token) => dispatch => checkAxiosResponse(dispatch, cart + `/${slug}`, REMOVE_FROM_CART_SUCC,
    'post', token, { _method: 'PATCH', hash})

