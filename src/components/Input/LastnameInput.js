import InputValidator from '../FormValidator/InputValidator';

const LastnameInput = props => {
    return (
        <InputValidator
            required
            label='نام خانوادگی'
            name='lastname'
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        />
    );
};

export default LastnameInput;