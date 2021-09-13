import InputValidator from "../FormValidator/InputValidator";
import {MenuItem} from "@material-ui/core";
import {keyGenerator} from "../../helpers";

const Select = (props) => {
    return (
        <InputValidator
            required={props?.required}
            multiple={props?.multiple}
            select
            value={props?.value}
            defaultValue={props?.defaultValue}
            name={props.name ?? 'type'}
            label={props.label ?? 'نوع'}
        >
            {
                props?.options?.map(option => {
                    return <MenuItem key={keyGenerator()} value={option.key}>{option.label}</MenuItem>
                })
            }
        </InputValidator>
    );
};

export default Select;