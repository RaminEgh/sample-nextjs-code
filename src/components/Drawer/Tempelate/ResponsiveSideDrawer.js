import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Collapse, Hidden, useTheme} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import {useSession} from "next-auth/client";
import Logo from "../../Logo/Logo";
import Divider from "../../Divider/Divider";
import {useState} from "react";
import {keyGenerator} from "../../../helpers";
import Box from "@material-ui/core/Box";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '0.9rem'
    },

    nested: {
        '& span': {
            fontSize: '0.9rem !important',
        },
    },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const ResponsiveSideDrawer = ({menu, drawer, toggleDrawer, window}) => {
    const classes = useStyles();
    const [session, loading] = useSession();
    const theme = useTheme();

    const [openMenu, setOpenMenu] = useState([]);
    const onClickMenu = (num) => {
        if (openMenu.includes(num)) {
            const filtered = openMenu.filter((value) => value !== num)
            setOpenMenu(filtered);
        } else {
            setOpenMenu([...openMenu, num])
        }
    }

    const isOpenThisMenu = i => openMenu.includes(i);
    const   container = window !== undefined ? () => window().document.body : undefined;

    const drawerView = (
        <div>
            <Box textAlign='center'>
                <Logo/>
            </Box>

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

            <Divider/>
        </div>
    );
    return (
        <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                    open={drawer}
                    onClose={toggleDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawerView}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">

                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    onClose={toggleDrawer}
                >
                    {drawerView}
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default ResponsiveSideDrawer;
