import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import {makeStyles} from "@material-ui/core";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {SpeedDial} from "@material-ui/lab";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Link from "next/link";
import {_ABOUT_US, _CART, _CONTACT_US, _COURSES, _HOME, _LOGIN, _PANEL} from "../constants/frontPath";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined';
import {getSession} from "next-auth/client";
import Loading from "../components/Loading/Loading";


const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        position: "sticky",
        top: 0,
        maxWidth: 260,
        margin: "auto",
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },
    mainBox: {
        paddingTop: '16px !important',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
        }
    },
    speedDial: {
        position: 'sticky',
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            bottom: theme.spacing(2),
            marginLeft: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
    },
}))

const tabs = [
    {
        href: _HOME,
        icon: <HomeOutlinedIcon/>,
        label: 'خانه'
    },
    {
        href: _COURSES,
        icon: <LaptopChromebookOutlinedIcon/>,
        label: 'دوره ها'
    },
    {
        href: _ABOUT_US,
        icon: <HelpOutlineOutlinedIcon/>,
        label: 'درباره'
    },
    {
        href: _CONTACT_US,
        icon: <EmailOutlinedIcon/>,
        label: 'ارتباط'
    },
];

const Public = ({children}) => {
    const router = useRouter();
    const classes = useStyles();
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const tabsHref = [
        _HOME,
        _COURSES,
        _ABOUT_US,
        _CONTACT_US,
    ];


    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                tabsHref.splice(1, 0, _PANEL)
                tabs.splice(1, 0,
                    {
                        href: _PANEL,
                        icon: <PermIdentityOutlinedIcon/>,
                        label: 'پنل کاربری'
                    },
                )
            }
            setIsLoading(false)
        })
        let firstSectionPath = _HOME;
        firstSectionPath += router.asPath.split('/').filter(e => e != '' && e != undefined)[0] || '';
        setActive(tabsHref.indexOf(firstSectionPath));
    }, [])

    if (isLoading) return <Loading loading center/>
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={3} sm={12} xs={12}>
                        <Box className={classes.sidebarContainer}>
                            <Sidebar tabs={tabs} active={active} setActive={setActive}/>
                        </Box>
                    </Grid>
                    <Grid item md={9} sm={12} xs={12}>
                        <Box className={classes.mainBox}>
                            <Header/>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Link href={_CART}>
                <SpeedDial
                    open={false}
                    ariaLabel="cart"
                    icon={<ShoppingCartOutlinedIcon/>}
                    direction='right'
                    className={classes.speedDial}
                />
            </Link>

            <Footer/>
        </>

    );
};

export default Public;