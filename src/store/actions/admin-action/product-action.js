import {admin_products} from '../../../constants/adminApi';
import {GET_PRODUCTS_SUCC, GET_PRODUCT_SUCC, UPDATE_PRODUCT_SUCC} from "../../admin-types";
import {checkAxiosResponse} from "../../../helpers";


export const getProducts = (token, query = '') => dispatch => checkAxiosResponse(dispatch,
    `${admin_products}${query}`, GET_PRODUCTS_SUCC,
    'get', token);

export const getProduct = (token, slue) => dispatch => checkAxiosResponse(dispatch,
    `${admin_products}/${slue}`, GET_PRODUCT_SUCC,
    'get', token);


export const updateProduct = (token, slug, data) => dispatch => checkAxiosResponse(dispatch,
    `${admin_products}/${slug}`, UPDATE_PRODUCT_SUCC,
    'post', token, data);

