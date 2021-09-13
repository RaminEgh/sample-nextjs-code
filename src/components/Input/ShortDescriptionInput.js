import InputValidator from "../FormValidator/InputValidator";

const ShortDescriptionInput = (props) => {
    return (
        <InputValidator
            required={props?.required}
            multiline
            defaultValue={props?.defaultValue}
            rows={4}
            name={props.name ?? 'short_description'}
            label={props.label ?? 'توضیحات کوتاه'}
        />
    );
};

export default ShortDescriptionInput;