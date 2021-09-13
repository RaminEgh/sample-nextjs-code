import InputValidator from "../FormValidator/InputValidator";

const TitleInput = (props) => {
    return (
        <InputValidator
            required
            name='title'
            label={props.label ?? 'عنوان'}
            defaultValue={props?.defaultValue}
        />
    );
};

export default TitleInput;