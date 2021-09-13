import InputValidator from '../FormValidator/InputValidator';

const PasswordInput = props => {
    let label = 'گذرواژه';
    if (props.name && !props.label) {
        label = 'تکراز گذروازه'
    } else if (props.label) {
        label = props.label;
    }
    return (
        <InputValidator
            required
            label={label}
            minLen={8}
            name={props.name || 'password'}
            type='password'
            onChange={props.onChange}
            helperText={`${label} باید حداقل 8 کاراکتر باشد`}
        />
    );
};

export default PasswordInput;