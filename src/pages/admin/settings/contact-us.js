import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/client";
import {setContactUs} from "../../../store/actions/admin-action/settings-action";
import FullEditor from "../../../components/RichEditor/FullEditor";
import {useEffect} from "react";
import {getContact} from "../../../store/actions/public-action/settings-action";

const ContactUs = () => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();
    const onSubmit = (event, editor) => {
        const content = editor.getData();
        dispatch(setContactUs(session?.accessToken, {content: content}))
    }
    useEffect(() => {
        dispatch(getContact())
    }, []);

    const contact = useSelector(state => state.settingRdcr.contact);

    return (
        <div>
            <FullEditor showSubmitButton onSubmit={onSubmit} value={contact} />
        </div>
    );
};

export default ContactUs;