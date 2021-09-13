import React, {memo} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import MuiIconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {blue, green, yellow, grey} from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';


const IconButton = props => {
    const useStyle = makeStyles(theme => ({
        success: {
            color: green[400],
        },
        danger: {
            color: red[400],
        },
        warning: {
            color: yellow[700]
        },
        info: {
            color: blue[400],
        },
        white: {
            color: grey[100],
            padding: props.p,
        },
        iconSize: {
            fontSize: props.iconSize || '2rem'
        },
        otherStyle: {
            padding: props.p
        }

    }));
    const classes = useStyle();

    return (
        <Tooltip title={props.title || ''} arrow>
            <MuiIconButton classes={{root: classes[props.severity || 'otherStyle']}} component={props.component} to={props.to} onClick={props.onClick}>
                {props.text !== null ? <Typography variant='subtitle1'>{props.text}</Typography> : null}
                <props.icon classes={{root: classes.iconSize}}/>
            </MuiIconButton>
        </Tooltip>
    );
};

export default memo(IconButton);