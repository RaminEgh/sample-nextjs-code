import FormCard from "../FormCard/FormCard";
import SearchSelect from "../Input/SearchSelect";
import InputValidator from "../FormValidator/InputValidator";
import SaveButton from "../Button/SaveButton";
import {upload} from "../../constants/api";
import SingleDropzoneUploader from "../Video/SingleDropzoneUploader";
import PriceInput from "../Input/PriceInput";
import FullEditor from "../RichEditor/FullEditor";
import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/client";
import {searchTeachers} from "../../store/actions/admin-action/admin-action";
import VideoUrlInput from "../Input/VideoUrlInput";
import CoverImageInput from "../Input/CoverImageInput";
import ShortDescriptionInput from "../Input/ShortDescriptionInput";
import ENTitleInput from "../Input/ENTitleInput";
import TitleInput from "../Input/TitleInput";

const CourseForm = ({onSubmit, name = 'course-form', data = null}) => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();
    const options = useSelector(state => state.adminTeacherRdcr.teachers)
    const dataProvider = () => {
        if (!loading)
            dispatch(searchTeachers(session.accessToken));
    }


    return (
        <FormCard name={name} title={data ? 'ویرایش دوره' : 'ایجاد دوره جدید'} onSubmit={onSubmit}>

            <SearchSelect dataProvider={dataProvider} data={options} label='کاربر موردنظر' name='teacher_id'/>

            <InputValidator
                name='collection_title'
                label='عنوان مجموعه'
            />

            <TitleInput
                label='عنوان دوره'
                defaultValue={data?.title}
            />

            <ENTitleInput
                defaultValue={data?.enTitle}
                label='عنوان انگلیسی دوره'
            />

            <ShortDescriptionInput defaultValue={data?.shortDescription}/>

            <FullEditor value={data?.description}/>

            <PriceInput defaultValue={data?.price}/>

            <CoverImageInput
                defaultValue={data?.cover}
            />

            <SingleDropzoneUploader url={upload} label='ویدیو معرفی'/>
            <VideoUrlInput
                required
                defaultValue={data?.intro_video_url}
                name='intro_video_url'
                label='لینک ویدیو معرفی دوره'
            />
            <SaveButton/>
        </FormCard>
    );
};

export default CourseForm;