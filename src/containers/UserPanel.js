import {AppBar, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {getSession} from "next-auth/client";
import {_LOGIN} from "../constants/frontPath";
import Loading from "../components/Loading/Loading";
import {useEffect, useState} from "react";
import UserSideDrawer from "../components/Drawer/UserSideDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import MuiIconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    childrenContainer: {
        marginTop: 12,
        marginLeft: drawerWidth,
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        marginTop: 16
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))

const UserPanel = ({children}) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        getSession().then((session) => {
            if (!session) window.location.href = _LOGIN;
            else setIsLoading(false);
        })
    }, [])

    if (isLoading) return <Loading loading center/>

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid md={12} xs={12} sm={12} xl={12} lg={12} item>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <MuiIconButton
                                color="inherit"
                                aria-label="drawer"
                                edge="end"
                                onClick={toggleDrawer}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </MuiIconButton>
                            <Typography variant="h6" noWrap>
                                پنل کاربر
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div className={classes.childrenContainer}>
                        <div className={classes.toolbar}/>
                        <UserSideDrawer toggleDrawer={toggleDrawer} drawer={drawer}/>
                        {children}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserPanel;