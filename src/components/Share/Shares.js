import {memo} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    }
}));

const Shares = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Typography component='body1'>انتشار در: </Typography>
            <Grid component={Link} href={'whatsapp://send?text=' + window.location.href + '/'} data-action='share/whatsapp/share' target='_blank'
                  rel='noopener noreferrer'>
                <WhatsAppIcon/>
            </Grid>
            <Grid component={Link} href={'https://t.me/share/url?url=' + window.location.href} target='_blank'
                  rel='noopener noreferrer'>
                <TelegramIcon/>
            </Grid>
            <Grid component={Link} href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '&display=popup'} target='_blank'
                  rel='noopener noreferrer'>
                <FacebookIcon/>
            </Grid>
            <Grid component={Link} href={'https://twitter.com/intent/tweet?url=' + window.location.href} target='_blank'
                  rel='noopener noreferrer'>
                <TwitterIcon/>
            </Grid>
        </div>
    );
};

export default memo(Shares);