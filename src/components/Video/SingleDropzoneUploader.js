import {useState} from 'react';
import Uploader from "../Uploader/Uploader";
import Box from "@material-ui/core/Box";
import InputValidator from "../FormValidator/InputValidator";

const SingleDropzoneUploader = (props) => {
    const [fileHash, setFileHash] = useState(null);
    const getAndSetHash = (hash) => {
        setFileHash(hash)
    }
    return (
        <>
            <Box hidden>
                <InputValidator name='file_hash' value={fileHash}/>
            </Box>
            <Uploader {...props} getHash={getAndSetHash}/>
        </>
    );
};

export default SingleDropzoneUploader;