import InputValidator from '../FormValidator/InputValidator';

const FirstnameInput = props => {
    return (
        <InputValidator
            required
            label='نام'
            name='firstname'
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        />
    );
};

export default FirstnameInput;