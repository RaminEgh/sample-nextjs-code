import {Box} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 96,
        zIndex: 999999,
    },
    center: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999999,
        margin: 'auto',
    },

}));

const Loading = props => {
    const classes = useStyle();
    if (!props.loading) return null;
    return (
        <Box className={props.center ? '' : classes.root}>
            <CircularProgress className={props.center ? classes.center : ''}/>
        </Box>
    );
};

export default Loading;