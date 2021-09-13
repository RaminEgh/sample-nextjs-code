import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {keyGenerator} from "../../helpers";
import {Collapse} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import {_ABOUT_US, _CONTACT_US, _COURSES, _HOME} from '../../constants/frontPath';
import Logo from "../Logo/Logo";
import Divider from "../Divider/Divider";
import {useSession} from "next-auth/client";
import AuthButtons from "../AuthButtons/AuthButtons";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';

const useStyles = makeStyles((theme) => ({

    drawer: {
        padding: '8px 16px'
    },

    listItemText: {
        fontSize: '0.9rem'
    },

    nested: {
        '& span': {
            fontSize: '0.9rem !important',
        },
    }
}));

const SideDrawer = (props) => {
    const classes = useStyles();
    const [session, loading] = useSession();

    const menu = [
        {
            title: 'صفحه اصلی',
            icon: <HomeIcon/>,
            href: _HOME
        },
        {
            title: 'دوره ها',
            icon: <LaptopChromebookIcon/>,
            href: _COURSES
        },
        {
            title: 'درباره ما',
            icon: <InfoOutlinedIcon/>,
            href: _ABOUT_US
        },
        {
            title: 'ارتباط با ما',
            icon: <ContactPhoneOutlinedIcon/>,
            href: _CONTACT_US
        },

    ];


    return (
            <Drawer classes={{paper: classes.drawer}} anchor='left' open={props.drawer} onClose={props.toggleDrawer}>
                <Logo/>

                <Divider/>
                <br/>
                <AuthButtons/>
                <Divider/>

                {
                    menu.map((item, index) => {
                        return !item.children ? <Link href={item.href} key={keyGenerator()}>
                            <ListItem button classes={{root: classes.listItemRoot}}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText classes={{primary: classes.listItemText}} primary={item.title}/>
                            </ListItem>
                        </Link> : <div key={keyGenerator()}>
                            <ListItem button onClick={() => onClickMenu(index)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title}/>
                            </ListItem>
                            <Collapse className={classes.nested} in={isOpenThisMenu(index)}>
                                {
                                    item.children.map((child, index) => {
                                        return <Link href={child.href} key={keyGenerator()}>
                                            <ListItem button>
                                                <ListItemIcon><RemoveIcon/></ListItemIcon>
                                                <ListItemText primary={child.title}/>
                                            </ListItem>
                                        </Link>
                                    })
                                }
                            </Collapse>
                        </div>
                    })
                }
            </Drawer>
    )
}

export default SideDrawer;
