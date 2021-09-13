import InputFileValidator from "../FormValidator/InputFileValidator";

const AvatarInput = ({defaultValue}) => {
    return (
        <InputFileValidator
            name='avatar'
            label='بارگزاری تصویر پروفایل'
            defaultValue={defaultValue}
            maxSize={64}
        />
    );
};

export default AvatarInput;