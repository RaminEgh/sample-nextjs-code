import React, {memo} from 'react';
import InputValidator from '../FormValidator/InputValidator';
import AddIcon from '@material-ui/icons/Add';

const AddButton = () => {
    return (
        <InputValidator
            button
            label='افزودن'
            startIcon={AddIcon}
        />
    );
};

export default memo(AddButton);