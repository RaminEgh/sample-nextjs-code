import React from 'react';
import {Autocomplete} from "@material-ui/lab";
import {Chip, TextField} from "@material-ui/core";

const TagsInput = ({}) => {
    let limitTagsCount = 7;
    return (
        <Autocomplete
            multiple
            freeSolo
            id="tags-filled"
            options={[].map((option) => option.title)}
            defaultValue={[]}
            limitTags={limitTagsCount}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    (index > limitTagsCount - 1) ? null :
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="تگ ها" placeholder="عبارت یا کلمه موردنظر خود را بنویسید و اینتر را فشار دهید" />
            )}
        />
    );
};

export default TagsInput;