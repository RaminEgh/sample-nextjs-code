import {Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DownloadIconButton from "../Icon/IconButton/DownloadIconButton";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';




const FileItem = ({item}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <InsertDriveFileOutlinedIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item?.title}
                // secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction>
                <DownloadIconButton />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default FileItem;