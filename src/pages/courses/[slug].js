import Head from 'next/head';
import {Box, Card, CardContent, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chapter from "../../components/Chapter";
import Parts from "../../components/Parts";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {_CART} from "../../constants/frontPath";
import {getSession, useSession} from "next-auth/client";
import {addToCart} from "../../store/actions/public-action/cart-action";
import {useEffect} from "react";
import renderHTML from 'react-render-html';
import CardHeader from "../../components/Card/CardHeader/CardHeader";
import {sendAwaitAxiosRequest} from "../../helpers";

const useStyles = makeStyles((theme) => ({
    header:{
        justifyContent: "flex-start",
        alignItems: 'flex-start'
    },
    cardMedia: {
        position: "sticky",
        top: 20
    },
    media: {
        height: 180,
        width: '100%',
    },
}))

const Course = props => {
    const classes = useStyles();
    const cart = useSelector(state => state.cartRdcr.cart);

    useEffect(() => {
        if (typeof window !== "undefined" && cart) {
            localStorage.setItem('cartHash', cart.hash);
        }
    }, [cart])


    const {course} = props;
    const product = course.product;
    return (
        <>
            <Head>
                <title>{`${course.title} | ${process.env.SITE_NAME}`}</title>
                <meta name="description" content={course.shortDiscription}/>
            </Head>
            <Box>
                <Grid container spacing={2} >
                    <Grid item md={12} sm={12} xs={12}>
                        <Card>
                            <CardHeader title={course.title}/>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        {course?.introductionVideo ? <video controls width='100%' src={course?.introductionVideo}/> : null}
                            <Card>
                                <CardContent>
                                    {renderHTML(course.description || null)}
                                </CardContent>
                            </Card>
                        {course.chapters ? <Chapter chapters={course.chapters}/> : null}
                        <Parts items={course.parts}/>
                    </Grid>

                    <Grid item md={4}>
                        <PaymentCard className={classes.cardMedia} {course.payment}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

async function getCourse(slug, token) {
    return sendAwaitAxiosRequest('/courses/' + slug, 'get', token);
}

export async function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;
    const session = await getSession(context)
    const data = await getCourse(slug, session?.accessToken);
    if (!data)
        return {notFound: true}
    return {
        props: {course: data?.course}
    }
}



export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}


export default Course;