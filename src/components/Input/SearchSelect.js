import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useEffect, useState} from "react";
import InputValidator from "../FormValidator/InputValidator";
import {keyGenerator} from "../../helpers";
import Box from "@material-ui/core/Box";



const SearchSelect = ({dataProvider, data, name, label}) => {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [options, setOptions] = useState([]);
    const inputLoading = open && options.length === 0;

    const onInputChangeFun = e => {
        setSelectedId(e.target.value)
    }

    const onOpen = () => {
        setOpen(true)
        dataProvider()
    }


    useEffect(() => {
        let active = true;
        if (!inputLoading) return undefined;
        if (active) setOptions(data);
        return () => active = false
    }, [inputLoading]);

    useEffect(() => {
        setOptions(data);
    }, [data]);

    return (
        <>
            <Box hidden>
                <InputValidator type='hidden' name={name} value={selectedId}/>
            </Box>
            <Autocomplete
                id="asynchronous-select"
                open={open}
                onOpen={onOpen}
                onClose={() => {setOpen(false)}}
                getOptionLabel={(option) => option.name}
                renderOption={option => <option key={keyGenerator()} data-teacher-id={option.id} value={option.id}>{option.name}</option>}
                onInputChange={onInputChangeFun}
                options={options}
                loading={inputLoading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {inputLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
        </>
    );
}

export default SearchSelect;