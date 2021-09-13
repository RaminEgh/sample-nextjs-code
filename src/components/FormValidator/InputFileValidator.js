import React, {useState} from 'react';
import FileInput from '../Input/FileInput';
import Box from '@material-ui/core/Box';
import {keyGenerator} from "../../helpers";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 4,
        width: '100%',
        height: 56
    }
}))
const InputFileValidator = props => {
    const classes = useStyles();
    let typeSize = 'KB';
    if (props.MB) {
        typeSize = 'MB'
    } else if (props.GB) {
        typeSize = 'GB'
    }
    const initialHelperText = `حداکثر سایز فایل باید ${(props.maxSize || 128) + typeSize} باشد`;
    const [helperText, setHelperText] = useState(initialHelperText);
    const [error, setError] = useState(false);
    const [buttonLabel, setButtonLabel] = useState(props.label);

    const onChangeInputFile = e => {
        props.onChange?.(e, props.name);
        const files = e.target.files;
        if (files.length > 1) {
            Array.from(files).forEach(file => {
                if (typeSize === 'KB' && file.size > (props.maxSize * 1024)) {
                    setError(true);
                    setHelperText(initialHelperText);
                }
            });
            setButtonLabel(files.length + ' فایل انتخاب شد ');
        } else {
            if (typeSize === 'KB' && files[0].size > (props.maxSize * 1024)) {
                setError(true);
                setHelperText(initialHelperText);
            } else {
                setButtonLabel(files[0].name);
                setHelperText('');
            }

        }
    };

    return (
        <Box mb={2}>
            <FileInput
                {...props}
                id={keyGenerator()}
                className={classes.root}
                label={buttonLabel}
                onChange={onChangeInputFile}
            />
            <br/>
            <small style={{color: error ? 'red' : ''}}>{helperText}</small>
            {props.children}
        </Box>
    );
};


export default InputFileValidator;