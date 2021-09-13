import Box from '@material-ui/core/Box';
import FormCard from "../../FormCard/FormCard";
import PasswordInput from "../../Input/PasswordInput";
import RegisterButton from "../../Button/RegisterButton";
import {t} from "../../../helpers";
import common from "../../../../public/static/locales/fa/common";
import EmailInput from "../../Input/EmailInput";
import Divider from "../../Divider/Divider";
import RedirectHelpLink from "../RedirectHelpLink";
import FirstnameInput from "../../Input/FirstnameInput";
import LastnameInput from "../../Input/LastnameInput";

const RegisterForm = props => {
    return (
        <Box m={3} width={320}>
            <FormCard onSubmit={props.onSubmit} name={props.name || 'register'} title={t(common.register)}>
                {props.children}
                <EmailInput/>
                <FirstnameInput/>
                <LastnameInput/>
                <PasswordInput/>
                <PasswordInput name='password_confirmation'/>
                <RegisterButton/>
                <Divider mt={16}/>
                <RedirectHelpLink desc='قبلا ثبت نام کرده اید؟' type='in'/>
            </FormCard>
        </Box>
    );
};

export default RegisterForm;