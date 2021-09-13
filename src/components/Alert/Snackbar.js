import {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import Alert from '@material-ui/lab/Alert';
import MuiSnackbar from '@material-ui/core/Snackbar';
import {useDispatch} from "react-redux";
import {RESET} from "../../store/types";
import {globalAction} from "../../helpers";

const Snackbar = props => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const onCloseHandler = () => {
        setShow(false);
        dispatch(globalAction(RESET))
    }

    useEffect(() => {
        if (props.message?.length > 0)
            setShow(true);
        else setShow(false)
    }, [props.message, props.code]);

    const severity = props.errors ? 'error' : props?.type ? props.type : 'success';

    return ReactDom.createPortal((
        <MuiSnackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={show} onClose={onCloseHandler} autoHideDuration={6000}>
            <Alert onClose={() => setShow(false)} severity={severity}>
                {props.message}
            </Alert>
        </MuiSnackbar>
    ), document.getElementById('notifications'));
};

export default Snackbar;