import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {useSession} from "next-auth/client";

const Uploader = ({url, multiple, label, getHash}) => {
    const useStyles = makeStyles((theme) => ({
        dropzone: {
            overflow: "auto"
        }
    }));
    const [session, loading] = useSession();
    const inputContent = 'فایل خود را بکشید و اینجا رها کنید یا کلیک کنید';
    const classes = useStyles();
    // specify upload params and url for your files
    const getUploadParams = (params) => {
        return {url: process.env.BASE_API + url, headers: {Authorization: 'Bearer ' + session.accessToken}}
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({meta, file, xhr}, status) => {
        if (status === 'done') {
            getHash(JSON.parse(xhr.response).hash)
        }
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
    }

    return (
        <Box p={1}>
            <Typography align='left' gutterBottom variant='subtitle1' color='textSecondary'>{label}</Typography>
            <Dropzone
                addClassNames={classes}
                multiple={multiple}
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                inputContent={inputContent}
                accept="image/*,audio/*,video/*,.zip"
            />
        </Box>
    )
}

export default Uploader;