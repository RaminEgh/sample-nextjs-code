import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {callbackPayment} from "../../store/actions/user-action/payment-action";
import {Box} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import red from '@material-ui/core/colors/red';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import lightGreen from '@material-ui/core/colors/lightGreen';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '52vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        '& svg': {
            fontSize: '250%',
            marginBottom: 12
        }
    }
}));
const Panel = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const message = useSelector(state => state.globalRdcr.messages);
    const {Authority, Status} = router.query;

    useEffect(() => {
        if (Authority)
            dispatch(callbackPayment(Authority, Status))
    }, [router])

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {Status !== 'OK' ? <ErrorOutlineIcon style={{color: red[500]}}/> : <CheckCircleOutlineIcon color={lightGreen[600]}/>}
            <Typography>{message}</Typography>
        </Box>
    );
};


export default Panel;