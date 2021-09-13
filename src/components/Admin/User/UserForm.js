import FormCard from "../../FormCard/FormCard";
import PhoneInput from "../../Input/PhoneInput";
import InputValidator from "../../FormValidator/InputValidator";
import {MenuItem} from "@material-ui/core";
import PasswordInput from "../../Input/PasswordInput";
import SaveButton from "../../Button/SaveButton";
import FirstnameInput from "../../Input/FirstnameInput";
import LastnameInput from "../../Input/LastnameInput";
import ENFirstnameInput from "../../Input/ENFirstnameInput";
import ENLastnameInput from "../../Input/ENLastnameInput";
import EmailInput from "../../Input/EmailInput";
import AvatarWithInput from "../../Input/AvatarWithInput";

const UserForm = ({name = 'user-form', title = '', user = null}) => {
    return (
        <div>
            <FormCard name={name} title={title}>
                <PhoneInput/>
                <FirstnameInput/>
                <LastnameInput/>
                <ENFirstnameInput/>
                <ENLastnameInput/>
                <EmailInput/>
                <AvatarWithInput src={user?.avatar}/>

                <InputValidator
                    required
                    select
                    name='type'
                    label='نوع کاربری'
                >
                    <MenuItem key={'shop'} value='1'>فروشگاهی</MenuItem>
                    <MenuItem key={'medical'} value='2'>پزشکی</MenuItem>
                </InputValidator>

                <PasswordInput/>

                <SaveButton/>
            </FormCard>
        </div>
    );
};

export default UserForm;