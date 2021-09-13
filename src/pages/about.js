import renderHTML from "react-render-html";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {about} from "../constants/api";
import Head from "next/head";
import {isEmpty, sendAwaitAxiosRequest} from "../helpers";

const About = (props) => {
    return (
        <>
            <Head>
                <title>اسم سایت | درباره ما | توضیحات</title>
                <meta name="description" content="درباره سایت تستی"/>
            </Head>

            <Card>
                <CardContent>
                    {renderHTML(props.data)}
                </CardContent>
            </Card>
        </>


    );
};


export async function getStaticProps() {
    const data = await sendAwaitAxiosRequest(about);
    if (isEmpty(data)) return {notFound: true};
    return {
        props: {data},
        revalidate: 3600
    }
}

export default About;
