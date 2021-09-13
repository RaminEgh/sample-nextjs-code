import {Hidden, makeStyles, Tab, Tabs} from "@material-ui/core"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Link from 'next/link'
import {keyGenerator} from "../../helpers";
import Box from "@material-ui/core/Box";
import {memo, useState} from "react";
import PublicSideDrawer from "../Drawer/PublicSideDrawer";
import Logo from "../Logo/Logo";
import AuthButtons from "../AuthButtons/AuthButtons";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        zIndex: 9999,
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1)
    },
    nav: {
        ...theme.styles.txtR,
    },
    active: {
        color: theme.palette.secondary.main,
        '& svg': {
            fontSize: '2.2rem',
        },
    },

    tabs: {
        textAlign: 'center',
    },
    logoAndMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-between",
        }
    }
}));

const Sidebar = props => {
    const {tabs, url} = props;
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };


    const classes = useStyles();
    const active = props.active;
    return (
        <header className={classes.sidebar}>
            <nav className={classes.nav}>
                <Box className={classes.logoAndMenu}>
                    <Logo/>
                    <Hidden mdUp>
                        <MenuOutlinedIcon onClick={toggleDrawer}/>
                    </Hidden>
                </Box>
                <PublicSideDrawer drawer={drawer} toggleDrawer={toggleDrawer}/>
                <Hidden smDown>
                    <AuthButtons/>
                    <Tabs classes={{root: classes.tabs}} value={active} indicatorColor='primary' orientation="vertical" centered>
                        {
                            tabs.map((item, index) => {
                                return <Link href={item.href} key={keyGenerator()}>
                                        <Tab component='a' href={item.href} className={active === index ? classes?.active : ''}
                                             icon={item.icon} onChange={() => props?.setActive(index)}
                                             label={item.label}

                                        />
                                </Link>
                            })
                        }

                    </Tabs>
                </Hidden>
            </nav>
        </header>
    );
};

export default memo(Sidebar);