import {Box} from "@material-ui/core";
import SearchSelect from "../../../components/Input/SearchSelect";
import {useSession} from "next-auth/client";
import {useDispatch, useSelector} from "react-redux";
import {searchUsers} from "../../../store/actions/admin-action/user-action";
import FormCard from "../../../components/FormCard/FormCard";
import SaveButton from "../../../components/Button/SaveButton";
import {getFormData} from "../../../helpers";
import {addTeacher} from "../../../store/actions/admin-action/teacher-action";


const Create = () => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();
    const data = useSelector(state => state.adminUserRdcr.users)
    const dataProvider = () => {
        if (!loading)
            dispatch(searchUsers(session.accessToken));
    }
    const createTeacherByUserId = (e) => {
        const data = getFormData(e, 'add-teacher', false)
        dispatch(addTeacher(session.accessToken, data['user_id']))
    }

    return (
        <Box my={2}>
            <FormCard name='add-teacher' onSubmit={createTeacherByUserId}>
                <SearchSelect dataProvider={dataProvider} data={data} label='کاربر موردنظر' name='user_id'/>
                <SaveButton label='مدرس شود'/>
            </FormCard>
        </Box>

    );
};

export default Create;