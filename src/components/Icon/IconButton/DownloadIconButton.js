import IconButton from "../../Button/IconButton";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import MuiLink from "@material-ui/core/Link";

const DownloadIconButton = () => {
    return (
        <IconButton title='دانلود' icon={GetAppOutlinedIcon} component={MuiLink}
                    to={process.env.BASE_API + '/testdownload/47'} edge="end" aria-label="download"/>
    );
};

export default DownloadIconButton;