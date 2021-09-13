import {FAIL, LOADING, SUCCESS} from "../store/types";
import axios from "../../axios";

export const keyGenerator = (length = 5) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charIndex = Math.floor(Math.random() * 27);
    const char = chars.charAt(charIndex);
    let number = '';
    if (length > 1)
        number = Math.floor(Math.random() * (Math.pow(10, length)));
    return char + number;
};

export const isEmpty = value => {
   return  Object.keys(value).length === 0 && value.constructor === Object;
}

/* --- form helper */

export const getFormData = (event, name, hasFile = true, otherData = null) => {
    event.preventDefault();
    let formData;
    if (hasFile) formData = new FormData(); else formData = {};
    let inputs = document.forms[name].getElementsByTagName('input');
    let textarea = document.forms[name].getElementsByTagName('textarea');
    inputs = [...inputs, ...textarea];
    if (hasFile) {
        inputs.forEach(input => {
            if (input.type === 'file' && input.name)
                formData.append(input.name, input.files?.[0] || '');
            else if (input.name)
                formData.append(input.name, input.value);
        });
    } else inputs.forEach(input => formData[input.name] = input.value);
    return formData;
};

/* --- url tools */
export const getLastUrlSegment = () => {
    let url = window.location.pathname;
    url = url.split('/');
    return url.pop();
};

export const changeParamsInUrl = (key, value, get = false) => {
    let searchParams = new URLSearchParams(window.location.search);
    if (value) {
        if (!Array.isArray(value)) {
            if (!searchParams.has(key)) searchParams.append(key, value);
            else searchParams.set(key, value);
        } else {
            if (!searchParams.has(key)) searchParams.append(key, value.join());
            else searchParams.set(key, value.join());
        }
    } else if (searchParams.has(key)) searchParams.delete(key);
    const url = window.location.pathname + '?' + searchParams.toString();
    if (get) return url; else window.history.pushState(null, null, url);
};

export const getParamFromUrl = (key) => {
    let param = '';
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(key)) param = searchParams.get(key);
    return param;
};

export const addBaseUrl = (restPath) => {
    return process.env.BASE_API + restPath
}

/* --- date tools */
export const getDayWithName = value => {
    return value.locale('fa').format('dddd، jD jMMMM jYYYY');
};

export const getGregorianDate = value => {
    return value.locale('es').format('YYYY-MM-DD');
};

/* --- translate tools */

export const t = (text, replacement = '') => {
    let modifiedText = text;
    for (const [key, value] of Object?.entries(replacement))
        modifiedText = text.replace(`{{${key}}}`, value)
    return modifiedText;
}

/* --- state and action */
export const successState = (state, payload, data = {}) => {
    return {
        ...state,
        ...data,
    }
};

export const successAction = (type, payload) => {
    return {type, payload}
};

export const globalAction = (type, payload = null) => {
    return {type, payload}
}

export const checkAxiosResponse = async (dispatch, url, type, method = 'get', token = null, data = null) => {
    dispatch(globalAction(LOADING))
    addTokenToAxiosRequestHeader(token)
    axios?.[method](url, data).then(response => {
        if (!response.data.errors) {
            dispatch(globalAction(SUCCESS, response.data))
            dispatch(successAction(type, response.data))
        } else {
            dispatch(globalAction(FAIL, response.data))
        }
    }).catch(e => {
        dispatch(globalAction(FAIL, e))
    })
}

export const sendAwaitAxiosRequest = async (url, method = 'get', token = null, data = null) => {
    addTokenToAxiosRequestHeader(token)
    let response = null;
    await axios?.[method](url, data)
        .then(res => {
            response = res.data
        }).catch(e => {
            response = null;
        });
    return response;
}

export const addSeperatorToPrice = (number) => {
    let modified = [];
    const numberArray = [...number.toString()].reverse();
    numberArray.map((item, index) => {
        modified.unshift(item)
        if ((index + 1) % 3 === 0 && (index + 1) !== numberArray.length) {
            modified.unshift(',')
        }
    })
    return modified.join('');
}

const addTokenToAxiosRequestHeader = (token) => {
    if (token) {
        axios.interceptors.request.use((config) => {
            try {
                if (token && config.url !== '/auth')
                    config.headers.Authorization = 'Bearer ' + token;
            } catch (error) {
                console.log('Error : ', error)
            }
            return config;
        }, (error) => {
            console.log('axios : ', error)
        });
    }
}
