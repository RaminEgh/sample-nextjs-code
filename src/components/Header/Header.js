import {Box, makeStyles} from "@material-ui/core";
import Search from "../Search/Search";
import Button from "../Button/Button";
import {useSession, signOut} from "next-auth/client";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {jwtSignout} from "../../store/actions/public-action/auth-action";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signBox: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        '& button': {
            whiteSpace: 'nowrap'
        }
    }
}))


const Header = () => {
    const classes = useStyles()
    const [session, loading] = useSession();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(jwtSignout(session.accessToken));
        signOut();
    }


    return (
        <Box className={classes.header}>
            <Search/>
            {
                session && <Box className={classes.signBox} ml={2}>
                    <Button onClick={logoutHandler} startIcon={ExitToAppOutlinedIcon} text='خروج'/>
                </Box>
            }

        </Box>
    );
};

export default Header;