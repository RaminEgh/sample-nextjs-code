import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import SideDrawer from "../components/Drawer/SideDrawer";
import {getSession} from "next-auth/client";
import {_LOGIN} from "../constants/frontPath";
import Loading from "../components/Loading/Loading";
import {useEffect, useState} from "react";
import E404 from "../components/Error/E404";
import Public from "./Public";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: theme.palette.common.drawerWidth,
        marginTop: 16
    },
}))

const AdminPanel = ({children}) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                window.location.href = _LOGIN
            } else setIsLoading(false);
            if (session.user.type === 1) setIsAdmin(true)
        })
    }, [])

    if (isLoading) return <Loading loading center/>
    if (!isAdmin) return <Public><E404/></Public>

    return (
        <Container className={classes.container} maxWidth="xl">
            <SideDrawer/>
            { children }
        </Container>
    );
};

export default AdminPanel;