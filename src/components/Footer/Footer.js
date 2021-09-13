import makeStyles from "@material-ui/core/styles/makeStyles";
import Image from 'next/image';
import Box from "@material-ui/core/Box";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.footer,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
    },

    footerRow: {
        padding: 8,
    },

    firstRow: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        textAlign: 'right'
    },
    socialMedia: {
        '& a': {
            padding: '4px 8px',
            margin: '2px 8px',
            opacity: .8,
        },
        '& a:hover': {
            opacity: 1
        }
    },
    zarinpalLogo: {
        display: "block",
        cursor: 'pointer',
        opacity: .9
    },
    lastRow: {
        textAlign: 'center',
        backgroundColor: theme.palette.common.footerDark,
        width: '100%',
        color: "white"
    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <footer id='footer' className={classes.footer}>
            <Box className={[classes.footerRow, classes.firstRow].join(' ')}>
                <Box className={classes.socialMedia}>
                    <a href='https://instagram.com/lernoy' target='_blank' title='اینستاگرام لرنوی'>
                        <InstagramIcon/>
                    </a>
                    <a href='https://facebook.com/lernoy.f' target='_blank' title='فیسبوک لرنوی'>
                        <FacebookIcon/>
                    </a>
                    <a href='https://twitter.com/lernoycom' target='_blank' title='توییتر لرنوی'>
                        <TwitterIcon/>
                    </a>
                    <a href='https://www.linkedin.com/company/lernoy' target='_blank' title='لینکداین لرنوی'>
                        <LinkedInIcon/>
                    </a>
                </Box>

                <Image src="/images/zarinpal-logo.svg"
                       className={classes.zarinpalLogo}
                       height={88}
                       width={66}
                       onClick={() => window.open("https://www.zarinpal.com/trustPage/"+window.location.hostname,
                           null, "width=450, height=600, scrollbars=no, resizable=no")}
                       title='لوگوی تایید زرین پال'
                />

            </Box>

            <Box className={[classes.footerRow, classes.lastRow].join(' ')}>
                <p> همه حقوق این سایت برای لرنوی محفوظ است</p>
            </Box>
        </footer>
    );
};

export default Footer;