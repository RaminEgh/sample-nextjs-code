import {memo} from 'react';
import MuiPagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PaginationItem from '@material-ui/lab/PaginationItem';
import {keyGenerator} from "../../helpers";
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
        marginTop: 8
    }
}));



const Pagination = ({pagination, url}) => {

    const classes = useStyles();

    if (!pagination) return null;
    if (pagination.total_pages <= 1) return null;

    return (
        <Box className={classes.root}>
            <MuiPagination
                count={pagination?.total_pages}
                page={(parseInt(pagination?.current_page || 1))}
                variant='outlined' color='primary'
                renderItem={(item) => (
                    <Link key={keyGenerator()} href={`${url}?page=${item.page}`} passHref>
                        <PaginationItem
                            {...item}
                        />
                    </Link>
                )}
            />
        </Box>
    );
};

export default memo(Pagination);