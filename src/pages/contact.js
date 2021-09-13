import {contact} from "../constants/api";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import renderHTML from "react-render-html";
import Head from "next/head";
import {isEmpty, sendAwaitAxiosRequest} from "../helpers";

const Contact = (props) => {
    return (
        <>
            <Head>
                <title>لرنوی | ارتباط با ما | مرجع آموزشی آنلاین و حضوری</title>
                <meta name="description" content="ارتباط با سایت لرنوی"/>
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
    const data = await sendAwaitAxiosRequest(contact);
    if (isEmpty(data)) return {notFound: true};
    return {
        props: {
            data,
        },
        revalidate: 3600
    }
}

export default Contact;