import InputValidator from '../FormValidator/InputValidator';

const PhoneInput = props => {
    return (
        <InputValidator
            required={props.hasOwnProperty('hasOwnProperty') ? props.required : true}
            label='شماره موبایل'
            minLen={11}
            maxLen={13}
            name='phone'
            type='tel'
            onChange={props.onChange}
            regex='^(0098|\+?98|0)9\d{9}$'
        />
    );
};

export default PhoneInput;