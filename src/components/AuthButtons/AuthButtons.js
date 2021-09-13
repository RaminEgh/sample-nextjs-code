import Box from "@material-ui/core/Box";
import Link from "next/link";
import {_LOGIN, _REGISTER} from "../../constants/frontPath";
import {keyGenerator} from "../../helpers";
import Button from "../Button/Button";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import {useSession} from "next-auth/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    signBox: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 48px',
        '& button': {
            margin: '4px 16px',
            whiteSpace: 'nowrap'
        },
        [theme.breakpoints.down('md')]: {
            padding: '0 8px',
            '& button': {
                margin: '4px',
            },
        }
    },
}))

const AuthButtons = () => {
    const [session, loading] = useSession();
    const classes = useStyles();
    return (
        <>
            {
                !session && <Box p={2} className={classes.signBox}>
                    <Link href={_LOGIN} key={keyGenerator()} passHref>
                        <Button key={keyGenerator()} fullWidth text='ورود' startIcon={LockOpenOutlinedIcon}/>
                    </Link>

                    <Link href={_REGISTER} key={keyGenerator()}>
                        <Button fullWidth text='ثبت نام' startIcon={PersonAddOutlinedIcon}/>
                    </Link>

                </Box>
            }
        </>

    );
};

export default AuthButtons;