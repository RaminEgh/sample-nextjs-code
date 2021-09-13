import InputValidator from '../FormValidator/InputValidator';

const ENFirstnameInput = props => {
    return (
        <InputValidator

            label='نام به انگلیسی'
            name='en_firstname'
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        />
    );
};

export default ENFirstnameInput;