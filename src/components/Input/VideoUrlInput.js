import InputValidator from "../FormValidator/InputValidator";

const VideoUrlInput = (props) => {
    return (
        <InputValidator
            required={props?.required}
            type='url'
            defaultValue={props?.[props.name ?? 'video_url']}
            name={props.name ?? 'video_url'}
            label={props.label ?? 'لینک ویدیو'}
        />
    );
};

export default VideoUrlInput;