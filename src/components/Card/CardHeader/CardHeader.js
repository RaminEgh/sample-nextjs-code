import MuiCardHeader from '@material-ui/core/CardHeader';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    smallText: {
        fontSize: '1rem'
    },
    mediumText: {
        fontSize: '1.2rem'
    },
    largeText: {
        fontSize: '1.5rem'
    },

}));

const CardHeader = props => {
    const classes = useStyles();
    return (
        <MuiCardHeader classes={{title: classes.smallText, content: 'flex-justify-center'}} title={props.title}/>
    );
};

export default CardHeader;