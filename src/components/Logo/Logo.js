import Image from "next/image";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    logo: {
        textAlign: "center",
        height: '100%'
    }
}))
const Logo = () => {
    const classes = useStyles();
    return (
        <a href="/" className={classes.logo}>
            <Image src="/images/logo.png"
                   height={64}
                   width={'100%'}
                   alt='lernoy.com'/>
        </a>
    );
};

export default Logo;