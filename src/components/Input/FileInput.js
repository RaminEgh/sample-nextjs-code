import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(() => ({
    inputFile: {
        display: 'none',
    },
    image: {
        maxWidth: 320,
        width: '100%',
    }
}));

const FileInput = props => {
    const classes = useStyles();
    const [image, setImage] = useState(props?.defaultValue || null);
    const selectedAvatarEvent = e => setImage(URL.createObjectURL(e.target.files[0]));
    const onChangeHandler = (e) => {
        if ((e.target.files[0]?.type).split('/')[0] === 'image')
            selectedAvatarEvent(e)

        props.onChange?.(e, props.name)
    }
    return (
        <>
            {
                image ? <Box textAlign='center'>
                    <img alt='selected image' src={image} className={classes.image}/>
                </Box> : null
            }
            <input
                className={classes.inputFile}
                id={'id' + props.id}
                type='file'
                multiple={props.multiple}
                name={props.name || undefined}
                onChange={onChangeHandler}
            />
            <label htmlFor={'id' + props.id}>
                <Button className={props?.className} variant='outlined' size={props.size || 'medium'} color='primary' component='span' startIcon={<UploadIcon/>}>
                    {props.label}
                </Button>
            </label>
        </>
    );
};


export default FileInput;