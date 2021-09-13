import InputFileValidator from "../FormValidator/InputFileValidator";

const CoverImageInput = props => {
    return (
        <InputFileValidator
            required
            label='کاور'
            name='cover'
            maxSize={128}
            defaultValue={props?.cover}
        />
    );
};

export default CoverImageInput;