import {setAbout} from "../../../store/actions/admin-action/settings-action";
import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/client";
import FullEditor from "../../../components/RichEditor/FullEditor";
import {useEffect} from "react";
import {getAbout} from "../../../store/actions/public-action/settings-action";

const AboutUs = () => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();

    useEffect(() => {
        dispatch(getAbout())
    }, []);

    const about = useSelector(state => state.settingRdcr.about);

    const onSubmit = (event, editor) => {
        const content = editor.getData();
        dispatch(setAbout(session?.accessToken, {content: content}))
    }

    return (
        <div>
            <FullEditor showSubmitButton onSubmit={onSubmit} value={about} />
        </div>
    );
};

export default AboutUs;