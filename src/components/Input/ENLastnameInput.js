import InputValidator from '../FormValidator/InputValidator';

const ENLastnameInput = props => {
    return (
        <InputValidator
            label='نام خانوادگی به انگلیسی'
            name='en_lastname'
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        />
    );
};

export default ENLastnameInput;