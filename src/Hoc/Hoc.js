import dynamic from "next/dynamic";
import {useSelector} from "react-redux";
import Loading from "../components/Loading/Loading";
const Snackbar = dynamic(() => import('../components/Alert/Snackbar'), {ssr: false});

const Hoc = (component) => {
    const globalRdcr = useSelector(state => state.globalRdcr);
    return (
        <>
            <Loading loading={globalRdcr.loading} center/>
            <Snackbar message={globalRdcr.messages} code={globalRdcr?.code} type={globalRdcr.type} errors={globalRdcr.errors}/>
            {component.children}
        </>
    );
};

export default Hoc;
