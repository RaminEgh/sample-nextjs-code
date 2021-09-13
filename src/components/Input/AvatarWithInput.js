import Avatar from "../Avatar/Avatar";
import AvatarInput from "./AvatarInput";

const AvatarWithInput = ({src, size = 'xxxlarge'}) => {
    return (
        <>
            <Avatar size={size} src={src}/>
            <br/>
            <AvatarInput defaultValue={src}/>
        </>
    );
};

export default AvatarWithInput;