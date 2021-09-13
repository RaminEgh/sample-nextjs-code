import FormCard from "../../../components/FormCard/FormCard";
import TitleInput from "../../../components/Input/TitleInput";
import ENTitleInput from "../../../components/Input/ENTitleInput";
import SaveButton from "../../../components/Button/SaveButton";
import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/client";
import {getFormData} from "../../../helpers";
import {addCategory, getCategoryTypes} from "../../../store/actions/admin-action/category-action";
import Select from "../../../components/Input/Select";
import {useEffect} from "react";

const Create = () => {

    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const onSubmitForm = (e) => {
        const data = getFormData(e, 'add-category');
        dispatch(addCategory(session.accessToken, data))
    }

    useEffect(() => {
        dispatch(getCategoryTypes(session.accessToken))
    }, [])

    const types = useSelector(state => state.adminCategoryRdcr.types)

    return (
        <FormCard title='ساخت یک دسته بندی جدید' onSubmit={onSubmitForm} name='add-category'>
            <TitleInput/>
            <ENTitleInput/>
            <Select
                required
                label='دسته بندی برای '
                options={types}
                defaultValue={1}
            />
            <SaveButton/>
        </FormCard>
    );
};

export default Create;