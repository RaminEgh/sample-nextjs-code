import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";
import {keyGenerator} from "../../helpers";
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined';
import {Collapse} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import RemoveIcon from '@material-ui/icons/Remove';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import {useState} from "react";
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import {
    _ADMIN_ABOUT_US, _ADMIN_CATEGORIES, _ADMIN_CATEGORY_CREATE,
    _ADMIN_CONTACT_US,
    _ADMIN_CREATE_COLLECTION,
    _ADMIN_CREATE_COURSE, _ADMIN_DISCOUNTS,
    _ADMIN_FOOTER,
    _ADMIN_GET_COLLECTIONS,
    _ADMIN_GET_COURSES, _ADMIN_HOME_PAGE_STTG, _ADMIN_MAIN_SETTINGS, _ADMIN_PRODUCT_STTG,
    _ADMIN_PRODUCTS,
    _ADMIN_SETTINGS,
    _ADMIN_STATISTICS, _ADMIN_TEACHER_CREATE, _ADMIN_TEACHERS,
    _ADMIN_USER_CREATE,
    _ADMIN_USERS, _HOME, _LOGOUT, _MY_POSTS, _PANEL, _PANEL_CREATE_POST
} from '../../constants/frontPath';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import Divider from "../Divider/Divider";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
const useStyles = makeStyles((theme) => ({
    list: {
        minWidth: '100%',
        display: 'block'
    },
    drawerContainer: {
        width: theme.palette.common.drawerWidth,
        height: '100%',
    },
    nested: {
        '& span': {
            fontSize: '0.9rem !important',
        },
        '& svg': {
            marginLeft: '24px'
        }
    }
}));

const SideDrawer = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(true);
    const [openMenu, setOpenMenu] = useState([]);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const onClickMenu = (num) => {
        if (openMenu.includes(num)) {
            const filtered = openMenu.filter((value) => value !== num)
            setOpenMenu(filtered);
        } else {
            setOpenMenu([...openMenu, num])
        }
    }

    const isOpenThisMenu = i => openMenu.includes(i);

    const menu = [
        {
            group: [
                {
                    title: '???????? ???????? ????????',
                    icon: <HomeOutlinedIcon/>,
                    href: _HOME
                },
                {
                    title: '?????? ????????????',
                    icon: <PermIdentityOutlinedIcon/>,
                    href: _PANEL
                },

            ]
        },

        {
            title: '??????????????',
            icon: <PeopleOutlineOutlinedIcon/>,
            children: [
                {
                    title: '????????',
                    href: _ADMIN_USERS
                },
                {
                    title: '????????????',
                    href: _ADMIN_USER_CREATE
                }
            ]
        },

        {
            title: '????????????',
            icon: <PeopleAltOutlinedIcon/>,
            children: [
                {
                    title: '????????',
                    href: _ADMIN_TEACHERS
                },
                {
                    title: '????????????',
                    href: _ADMIN_TEACHER_CREATE
                }
            ]
        },

        {
            title: '???????????? ????',
            icon: <QueuePlayNextIcon/>,
            children: [
                {
                    title: '????????',
                    href: _ADMIN_GET_COLLECTIONS,
                },
                {
                    title: '????????????',
                    href: _ADMIN_CREATE_COLLECTION
                }
            ]
        },

        {
            title: '???????? ????',
            icon: <LaptopChromebookOutlinedIcon/>,
            children: [
                {
                    title: '????????',
                    href: _ADMIN_GET_COURSES,
                },
                {
                    title: '????????????',
                    href: _ADMIN_CREATE_COURSE
                }
            ]
        },

        {
            title: '???????? ???????? ????',
            icon: <CategoryOutlinedIcon/>,
            children: [
                {
                    title: '????????',
                    href: _ADMIN_CATEGORIES,
                },
                {
                    title: '????????????',
                    href: _ADMIN_CATEGORY_CREATE
                }
            ]
        },

        {
            title: '??????????????',
            icon: <WidgetsOutlinedIcon/>,
            href: _ADMIN_PRODUCTS
        },

        {
            title: '?????????? ????',
            icon: <LocalMallOutlinedIcon/>,
            href: _ADMIN_DISCOUNTS
        },

        {
            title: '??????',
            icon: <DescriptionOutlinedIcon/>,
            children: [
                {
                    title: '????????',
                    href: _MY_POSTS
                },
                {
                    title: '?????????? ?????? ????????',
                    href: _PANEL_CREATE_POST
                }
            ]
        },

        {
            title: '????????',
            icon: <EqualizerOutlinedIcon/>,
            href: _ADMIN_STATISTICS
        },

        {
            title: '??????????????',
            icon: <SettingsIcon/>,
            children: [
                {
                    title: '?????????????? ?????? ????????',
                    href: _ADMIN_MAIN_SETTINGS,
                },
                {
                    title: '???????? ???????? ????????',
                    href: _ADMIN_HOME_PAGE_STTG,
                },
                {
                    title: '??????????',
                    href: _ADMIN_PRODUCT_STTG,
                },
                {
                    title: '???????????? ????',
                    href: _ADMIN_ABOUT_US,
                },
                {
                    title: '???????? ???? ????',
                    href: _ADMIN_CONTACT_US,
                },
                {
                    title: '????????',
                    href: _ADMIN_FOOTER,
                },
            ]
        },

        {
            title: '????????',
            icon: <ExitToAppOutlinedIcon/>,
            href: _LOGOUT
        },
    ];

    return (
        <Box className={classes.drawerContainer}>
            <Drawer variant="permanent" anchor='left' open={true} onClose={toggleDrawer}>
                {
                    menu.map((item, index) => {
                        if (item.group) {
                            return item.group.map((groupItem, index) => {
                                return <>
                                    <Link href={groupItem.href}>
                                        <a>
                                            <ListItem button>
                                                <ListItemIcon>{groupItem.icon}</ListItemIcon>
                                                <ListItemText primary={groupItem.title}/>
                                            </ListItem>
                                        </a>
                                    </Link>

                                    {
                                        (item.group.length === index + 1) ? <Divider/> : null
                                    }
                                </>
                            })
                        } else if (item.children) {
                            return <div key={keyGenerator()}>
                                <ListItem button onClick={() => onClickMenu(index)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                                <Collapse className={classes.nested} in={isOpenThisMenu(index)}>
                                    {
                                        item.children.map((child, index) => {
                                            return <Link href={child.href} key={keyGenerator()}>
                                                <a>
                                                    <ListItem button>
                                                        <ListItemIcon><RemoveIcon/></ListItemIcon>
                                                        <ListItemText primary={child.title}/>
                                                    </ListItem>
                                                </a>
                                            </Link>
                                        })
                                    }
                                </Collapse>
                            </div>
                        } else {
                            return <Link href={item.href} key={keyGenerator()}>
                                <a>
                                    <ListItem button>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.title}/>
                                    </ListItem>
                                </a>
                            </Link>
                        }
                    })
                }
            </Drawer>
        </Box>
    )
}

export default SideDrawer;
