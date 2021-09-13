import {memo} from 'react';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import {Box} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {keyGenerator} from "../../helpers";

const useStyle = makeStyles(theme => ({
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
            fontSize: '3.5rem',
            color: theme.palette.common.mainColor,
            padding: 8,
            margin: 8,
        }
    }
}));

const SocialMedia = props => {
    const classes = useStyle();
    const socialLinks = props.socials;
    if (!socialLinks) return null;
    let socialMedia = Object.keys(socialLinks)?.map(key => {
        if (!socialLinks[key]) return null;
        switch (key) {
            case 'instagram':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <InstagramIcon/>
                </Grid>;
            case 'telegram':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <TelegramIcon/>
                </Grid>;
            case 'youtube':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <YoutubeIcon/>
                </Grid>;
            case 'facebook':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <FacebookIcon/>
                </Grid>;
            case 'linkedin':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <LinkedinIcon/>
                </Grid>;
            case 'twitter':
                return <Grid key={keyGenerator()} item component={Link} href={socialLinks[key]} target='_blank'
                             rel='noopener noreferrer'>
                    <TwitterIcon/>
                </Grid>;
            default:
                return null
        }
    });
    return (
        <Box className={classes.socialIcons}>
            {socialMedia}
        </Box>
    );
};

export default memo(SocialMedia);