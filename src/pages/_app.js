import {Provider} from 'react-redux';
import {useStore} from '../store/store';
import {Provider as AuthProvider} from 'next-auth/client';
import Head from 'next/head';
import ProgressBar from "@badrap/bar-of-progress";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import '../assets/styles/global.css'
import Public from "../containers/Public";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';
import {useRouter} from "next/router";
import {useEffect} from "react";
import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import("../containers/AdminPanel"), {ssr: false})
const UserPanel = dynamic(() => import("../containers/UserPanel"), {ssr: false});
import Router from "next/router";
import Hoc from "../Hoc/Hoc";

const progress = new ProgressBar({
    size: 3,
    color: "#38a169",
    className: "bar-of-progress",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

export default function MyApp(props) {
    const {Component, pageProps} = props;
    const router = useRouter();
    const store = useStore(pageProps.initialReduxState)
    let Layout;

    switch (router.asPath.split('/')[1]) {
        case 'admin':
            Layout = AdminPanel;
            break;
        case 'panel':
            Layout = UserPanel;
            break;
        default:
            Layout = Public;
    }
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Head>
                    <title>اسم سایت |توضیحات سایت</title>
                    <meta name="description" content="توضیحات بیشتر"/>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                </Head>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <StylesProvider jss={jss}>
                    <ThemeProvider theme={theme}>
                        <Hoc>
                            <Layout>
                                <CssBaseline>
                                    <Component {...pageProps} />
                                </CssBaseline>
                            </Layout>
                        </Hoc>
                    </ThemeProvider>
                </StylesProvider>
            </Provider>
        </AuthProvider>

);
}

