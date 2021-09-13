import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = React.forwardRef((props, ref) => {
    return (
        <MuiButton
            {...props}
                   type={props?.type || 'button'}
                   variant={props.variant || 'outlined'}
                   color={props.color || 'primary'}
                   startIcon={props.startIcon ? <props.startIcon/> : null}
                   onClick={props.onClick || null}>
            {props.text}
        </MuiButton>
    );
});

export default Button;