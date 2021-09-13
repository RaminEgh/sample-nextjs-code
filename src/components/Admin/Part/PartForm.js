import {useState} from 'react';
import FormCard from "../../FormCard/FormCard";
import Box from "@material-ui/core/Box";
import InputValidator from "../../FormValidator/InputValidator";
import InputFileValidator from "../../FormValidator/InputFileValidator";
import Uploader from "../../Uploader/Uploader";
import SaveButton from "../../Button/SaveButton";
import Image from "next/image";
import {useRouter} from "next/router";
import {upload} from "../../../constants/api";
import TitleInput from "../../Input/TitleInput";
import {keyGenerator} from "../../../helpers";
import ENTitleInput from "../../Input/ENTitleInput";
import CoverImageInput from "../../Input/CoverImageInput";
import ShortDescriptionInput from "../../Input/ShortDescriptionInput";

const PartForm = ({onSubmit, formData}) => {

    const getAndSetHash = (hash) => {
        setFileHash(hash)
    }
    const router = useRouter();
    const {slug} = router.query;
    const [fileHash, setFileHash] = useState(null);

    return (
        <FormCard title={formData ? 'ویرایش پارت' : 'افزودن پارت به دوره'} name='part-upload' onSubmit={onSubmit}>
            <Box hidden>
                <InputValidator name='file_hash' value={fileHash}/>
                <InputValidator name='slug' value={slug}/>
            </Box>

            <TitleInput defaultValue={formData?.title}/>

            <ENTitleInput defaultValue={data?.enTitle}/>

            <ShortDescriptionInput defaultValue={data?.shortDescription}/>

            {formData?.cover ? <Image width={80} height={45} src={formData?.cover || null}/> : null}

            <CoverImageInput defaultValue={data?.cover}/>

            {
                formData?.files?.map(file => {
                    return <video key={keyGenerator()} controls width='46%' height={240} src={file?.path} />
                })
            }

            <Uploader getHash={getAndSetHash} url={upload}/>

            <SaveButton/>
        </FormCard>
    );
};

export default PartForm;