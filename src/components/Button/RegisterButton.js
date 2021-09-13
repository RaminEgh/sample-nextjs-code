import AddIcon from '@material-ui/icons/Add';
import InputValidator from "../FormValidator/InputValidator";
import {t} from "../../helpers";
import common from "../../../public/static/locales/fa/common";

const RegisterButton = props => {
    return (
        <InputValidator
            button
            label={t(common.register)}
            startIcon={AddIcon}
        />
    );
};

export default RegisterButton;