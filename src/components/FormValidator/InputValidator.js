import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "../Button/Button";
import {t} from "../../helpers";
import validation from "../../../public/static/locales/fa/validation";

const InputValidator = props => {
    const [helperText, setHelperText] = useState(props.helperText);
    const [error, setError] = useState(false);
    const onBlurValidation = e => {
        const value = e.target.value;
        checkInputValue(value)
    };

    const onFocusValidation = e => { setError(false) };

    const onChangeValidation = e => {
        const value = e.target.value;
        checkInputValue(value, 'onChange');
        props?.onChange?.(e, props.inputName);
    };


    const checkInputValue = (value, type = null) => {
        if (props.required) {
            if (!value) {
                setHelperText(t(validation.required, {label: props.label}));
                setError(true);
                return;
            } else {
                setError(false);
                setHelperText('');
            }
        }

        if (props.minLen) {
            if (value.length < props.minLen && !(type === 'onChange' || value.length < 1)) {
                setHelperText(t('minLen', {minLen: props.minLen, label: props.label}));
                props.required ? setError(true) : setError(false);
                return;
            } else {
                setError(false);
                setHelperText('');
            }
        }

        if (props.maxLen) {
            if (value.length > props.maxLen && !(type === 'onChange' || value.length < 1)) {
                setHelperText(t('maxLen', {maxLen: props.maxLen, label: props.label}));
                props.required ? setError(true) : setError(false);
                return;
            } else {
                setError(false);
                setHelperText('');
            }
        }

        if (props.regex) {
            const regex = RegExp(props.regex);
            const result = regex.test(value);
            if ((!result && (type !== 'onChange' && value.length > 0)) || value.length > 11) {
                setHelperText(t('invalidFormat', {name: props.label}));
                setError(true);
            }
        }
    };

    return (
        <>
            {!props.button ?
                <TextField
                    defaultValue={props.defaultValue || undefined}
                    dir={props?.dir}
                    className={props.className}
                    fullWidth={props.fullWidth || true}
                    value={props.value || undefined}
                    onBlur={e => onBlurValidation(e)}
                    onFocus={e => onFocusValidation(e)}
                    onChange={e => onChangeValidation(e)}
                    helperText={helperText}
                    error={error}
                    name={props.name || undefined}
                    variant='outlined'
                    type={props.type || 'text'}
                    id={props.id}
                    required={props.required}
                    multiline={props.multiline}
                    disabled={props.disabled}
                    select={props.select}
                    size={props.size}
                    rows={props.rows}
                    label={props.label}
                    component={props.component}
                    style={props.style}
                    InputProps={{
                        inputProps: {
                            ...props.InputProps,
                            maxLength: props.maxLen,
                            minLength: props.minLen,
                            style: props.style
                        }
                    }}
                >{props.children}</TextField> :
                <Button variant={props?.variant} onClick={props?.onClick} size={props.size || 'medium'} type='submit' startIcon={props.startIcon} text={props.label}/>
            }
        </>
    );
};



export default InputValidator;