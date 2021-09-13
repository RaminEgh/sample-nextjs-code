import {memo} from 'react';
import MuiSendIcon from '@material-ui/icons/Send';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    sendIcon: {
        transform: 'rotate(-180deg)',
    }
}));

const SendIcon = () => {
    const classes = useStyles();
    return <MuiSendIcon className={classes.sendIcon}/>
};

export default memo(SendIcon);