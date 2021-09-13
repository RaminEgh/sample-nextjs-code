import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 16px 2px 8px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: 28,
        boxShadow: 'none',
        border: `1px solid ${theme.palette.common.borderColor}`
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 4,
    },
}));



const Search = props => {
    const classes = useStyles();
    const onEmptySearch = e => {
        if ((e.target.value).length === 0) {
            props.onSubmit(e);
        }
    };
    return (
        <Box component='form' name='search' onSubmit={props.onSubmit} className={classes.root}>
            <InputBase
                fullWidth
                onChange={onEmptySearch}
                className={classes.input}
                name='q'
                placeholder={props.placeholder || 'جستجو'}
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type='submit' className={classes.iconButton} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default Search;