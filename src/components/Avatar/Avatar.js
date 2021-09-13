import {makeStyles} from '@material-ui/core/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    xlarge: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    xxlarge: {
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    xxxlarge: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
}));

const Avatar = props => {
    const classes = useStyles();
    return (
        <MuiAvatar alt="Remy Sharp" src={props?.src} className={classes[props.size]}/>
    );
};

export default Avatar;