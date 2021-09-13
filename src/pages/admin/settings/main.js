import {useEffect} from 'react';
import FormCard from "../../../components/FormCard/FormCard";
import InputValidator from "../../../components/FormValidator/InputValidator";
import {useDispatch, useSelector} from "react-redux";
import {setMainSettings} from "../../../store/actions/admin-action/settings-action";
import {useSession} from "next-auth/client";
import Loading from "../../../components/Loading/Loading";
import InputFileValidator from "../../../components/FormValidator/InputFileValidator";
import SaveButton from "../../../components/Button/SaveButton";
import {getFormData} from "../../../helpers";
import Image from 'next/image';
import {getMainSettings} from "../../../store/actions/public-action/settings-action";

const Main = (props) => {
    const formName = 'main';
    const dispatch = useDispatch();
    const [session, loading] = useSession();
    const mainSett = useSelector(state => state.adminSettingsRdcr.main);
    const globalRdcr = useSelector(state => state.globalRdcr);
    const {inputs, data} = useSelector(state => state.adminSettingsRdcr.main)
    const onSubmitMainSett = e => {
        const data = getFormData(e, formName);
        dispatch(setMainSettings(session.accessToken, data))
    }


    useEffect(() => {
        if (!loading)
            dispatch(getMainSettings(session.accessToken));
    }, [loading])

    if (globalRdcr.loading) {
        return <Loading loading center/>
    }


    return (
        <div>

            <FormCard name={formName} onSubmit={onSubmitMainSett} title='تنظیمات عمومی سایت'>
                {mainSett?.inputs?.map(item => {
                    if (item.type && item.type === 'file') {
                        return <>
                            <Image width={100} height={100} src={data[item.key]}/>
                            <InputFileValidator
                                key={item.key}
                                name={item.key}
                                label={item.label}
                            />
                        </>

                    } else {
                        return <InputValidator
                            defaultValue={data[item.key]}
                            key={item.key}
                            name={item.key}
                            label={item.label}
                            type={item?.type}
                        />
                    }

                })}
                <SaveButton/>
            </FormCard>
        </div>
    );
};

export default Main;