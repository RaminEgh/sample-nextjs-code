import Head from "next/head";
import {Card, Slide} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "../../components/Avatar/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    avatarNameFollowBox: {
        display: "flex",
        justifyContent: 'flex-start',
        '& h1': {
            fontSize: 18,
        },

        '& .name-follow-box': {
            marginLeft: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
    },
    aboutBox: {
        display: "flex",
        alignItems: "center",
        textAlign: "justify",
        height: '100%'
    },
    stateInfo: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        '& h2': {
            fontSize: 12,
            color: '#777'
        },
    }

}))
const Username = () => {
    const classes = useStyles();
    return (
        <>
            <Head>
                {/*<title>{`${course.title} | ${process.env.SITE_NAME}`}</title>*/}
                {/*<meta name="description" content={course.shortDiscription}/>*/}
            </Head>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <div className={classes.avatarNameFollowBox}>
                                <Avatar size='xxxlarge'/>
                                <div className='name-follow-box'>
                                    <h1>رامین اقبالیان خوب</h1>
                                    <Slide direction="up" mountOnEnter>
                                        <Button text='دنبال کردن'/>
                                    </Slide>
                                </div>
                            </div>
                        </Grid>

                        <Grid item md={4}>
                            <div className={classes.stateInfo}>
                                <h2>ramin.eghbalian.khob</h2>
                                <Typography variant='subtitle2'>25 دنبال کننده</Typography>
                                <Typography variant='subtitle2'>127 دنبال شونده</Typography>
                            </div>
                        </Grid>

                        <Grid item md={4}>
                            <div className={classes.aboutBox}>
                                <Typography variant='caption'>
                                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت
                                    چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از
                                    ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده
                                    استفاده می نماید صفحه‌بندی را به پایان برند.
                                </Typography>
                            </div>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default Username;