import Box from '@material-ui/core/Box';
import FormCard from "../../FormCard/FormCard";
import PasswordInput from "../../Input/PasswordInput";
import LoginButton from "../../Button/LoginButton";
import EmailInput from "../../Input/EmailInput";
import RedirectHelpLink from "../RedirectHelpLink";
import Divider from "../../Divider/Divider";


const LoginForm = props => {
    return (
        <Box m={3} width={320}>
            <FormCard onSubmit={props.onSubmit} name={props.name || 'login'} title='ورود به سایت' action={props.action}>
                {props.children}
                <EmailInput/>
                <PasswordInput/>
                <LoginButton/>
                <Divider mt={16}/>
                <RedirectHelpLink desc='در سایت ثبت نام نکرده اید؟' type='up'/>
            </FormCard>
        </Box>
    );
};

export default LoginForm;