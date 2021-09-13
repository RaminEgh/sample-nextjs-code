import {checkAxiosResponse} from "../../../helpers";
import {SUBMIT_CALLBACK_PAYMENT_SUCC, VALIDATE_FOR_PAYMENT_SUCC} from "../../types";
import {pay, payment_callback} from "../../../constants/api";

export const payCart = (hash, token) => dispatch => checkAxiosResponse(dispatch, pay, VALIDATE_FOR_PAYMENT_SUCC,
    'post', token, {hash});

export const callbackPayment = (Authority, Status) => dispatch => checkAxiosResponse(dispatch,
    `${payment_callback}?Authority=${Authority}&Status=${Status}`,
    SUBMIT_CALLBACK_PAYMENT_SUCC, 'get', null);
