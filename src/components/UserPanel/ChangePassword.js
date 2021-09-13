import FormCard from "../FormCard/FormCard";
import PasswordInput from "../Input/PasswordInput";
import SaveButton from "../Button/SaveButton";
import {useDispatch} from "react-redux";
import {useSession} from "next-auth/client";
import {changePassword} from "../../store/actions/user-action/panel-action";
import {getFormData} from "../../helpers";

const ChangePassword = () => {

    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const onSubmit = e => {
        const data = getFormData(e, 'change-password', false)
        dispatch(changePassword(session.accessToken, data))
    }

    return (
        <FormCard title='تغییر گذرواژه' name='change-password' onSubmit={onSubmit}>
            <PasswordInput
                name='current_password'
                label='گذرواژه کنونی'
            />
            <PasswordInput label='گذرواژه جدید'/>
            <PasswordInput
                name='password_confirmation'
                label='تکرار گذرواژه جدید'
            />
            <SaveButton/>
        </FormCard>
    );
};

export default ChangePassword;