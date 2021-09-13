import React from 'react';
import IconButton from "./IconButton";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const DeleteIconButton = props => {
    return (
        <IconButton onClick={props.onClick} icon={DeleteOutlinedIcon} title='حذف' severity='danger'/>
    );
};

export default DeleteIconButton;