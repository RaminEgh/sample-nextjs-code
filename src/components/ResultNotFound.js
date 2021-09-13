import {memo} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        minHeight: '480px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: grey[500]
    }
}));
const ResultNotFound = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography variant='h6'>خالی</Typography>
        </Box>
    );
};

export default memo(ResultNotFound);