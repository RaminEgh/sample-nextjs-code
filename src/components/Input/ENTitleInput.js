import InputValidator from "../FormValidator/InputValidator";

const ENTitleInput = props => {
    return (
        <InputValidator
            required
            name='en_title'
            label='عنوان انگلیسی'
            defaultValue={props?.defaultValue}
        />
    );
};

export default ENTitleInput;