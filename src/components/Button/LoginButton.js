import LoginIcon from "@material-ui/icons/Input";
import InputValidator from "../FormValidator/InputValidator";

const LoginButton = props => {
    return (
        <InputValidator
            {...props}
            button
            label='ورود'
            startIcon={LoginIcon}
        />
    );
};

export default LoginButton;