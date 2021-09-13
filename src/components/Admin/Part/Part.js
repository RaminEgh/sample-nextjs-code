import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import {useState} from "react";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from "../../Button/IconButton";
import Link from 'next/link';
import {_ADMIN_EDIT_PART} from "../../../constants/frontPath";
import DownloadIconButton from "../../Icon/IconButton/DownloadIconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const Part = props => {
    const {item} = props;
    const classes = useStyles();
    const [secondary, setSecondary] = useState(false);
    if (!item) return null;
    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                <List className='item-hover'>
                    <ListItem button={item?.description ? true : false}>
                        <ListItemText
                            classes={{root: 'flex-justify-start'}}
                            primary={item.title}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemAvatar>
                            <>
                                <IconButton title='پخش' icon={PlayCircleFilledWhiteOutlinedIcon}/>
                                &nbsp;&nbsp;
                                <DownloadIconButton/>
                                &nbsp;&nbsp;
                                <Link href={`${_ADMIN_EDIT_PART}/${item?.slug}`}>
                                    <a>
                                        <IconButton title='ویرایش' icon={EditOutlinedIcon} edge="end" aria-label="download"/>
                                    </a>
                                </Link>
                            </>
                        </ListItemAvatar>


                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default Part;