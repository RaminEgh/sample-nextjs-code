import React, {useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiSwitch from '@material-ui/core/Switch';
import makeStyles from '@material-ui/core/styles/makeStyles';


const IOSSwitch = props => {
    let color = '#F34621';
    if (props.severity)
        if (props.severity === 'success') color =  '#66bb6a';

    const useStyles = makeStyles(theme => ({
        root: {
            width: 56,
            height: 32,
            padding: 0,
            '& + .MuiTypography-root': {
                paddingLeft: '8px'
            }
        },
        switchBase: {
            padding: 2,
            '&$checked': {
                transform: 'translateX(24px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: color,
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: color,
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 25,
            height: 26,
        },
        track: {
            borderRadius: 32 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }));

    const classes = useStyles();
    return (
        <MuiSwitch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
};

export default function Switch(props) {
    const [checked, setChecked] = React.useState(!!props.checked);
    const onChanged = () => {
        props?.onChange?.(!checked, props.id || null);
        setChecked(!checked)
    };

    useEffect(() => {
        setChecked(!!props.checked)
    }, [props]);

    return (
            <FormControlLabel
                control={<IOSSwitch severity={props.severity} checked={checked} onChange={onChanged} name={props?.name} />}
                label={props?.label}
            />
    );
}