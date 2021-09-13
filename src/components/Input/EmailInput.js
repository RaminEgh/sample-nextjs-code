import InputValidator from '../FormValidator/InputValidator';

const EmailInput = props => {
    return (
        <InputValidator
            required
            label='پست الکترونیکی'
            name='email'
            type='email'
            onChange={props.onChange}
        />
    );
};

export default EmailInput;