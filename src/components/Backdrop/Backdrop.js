import MuiBackdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import {useEffect, useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "../Button/IconButton";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Backdrop = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        if (!props.lock) setOpen(false);
    };

    useEffect(() => {
        setOpen(props.open)
    }, [props]);


    return (
        <div>
            <MuiBackdrop className={classes.backdrop} open={open} onClick={handleClose}>
                {
                    <IconButton onClick={props.onClickCloseIcon} title='بستن' icon={CloseIcon} severity='white'/>
                }

                {props.children}
            </MuiBackdrop>
        </div>
    );
}

export default Backdrop;
