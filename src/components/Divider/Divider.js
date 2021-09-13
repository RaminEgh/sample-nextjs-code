import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiDivider from '@material-ui/core/Divider';

const Divider = props => {
    const useStyles = makeStyles(theme => ({
        root: {
            marginBottom: props.mb || '',
            marginTop: props.mt || '',
            // backgroundColor: props.color || 'rgba(0, 0, 0, 12)',
        }
    }));
    const classes = useStyles();
    return (
        <MuiDivider className={classes.root}/>
    );
};

export default Divider;