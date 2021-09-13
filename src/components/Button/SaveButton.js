import InputValidator from "../FormValidator/InputValidator";
import SaveIcon from "@material-ui/icons/Save";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16,
    }
}));
const SaveButton = (props) => {
    const classes = useStyles();
    return (
        <InputValidator
            button
            className={classes.root}
            onClick={props?.onClick}
            variant="contained"
            label={props?.label || 'ذخیره'}
            startIcon={SaveIcon}
        />
    );
};

export default SaveButton;