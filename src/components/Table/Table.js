import Paper from "@material-ui/core/Paper";
import ToolbarWithSortAndSelect from "./ToolbarWithSortAndSelect";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from '@material-ui/core/Table';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    scrollTable: {
        maxHeight: 'calc(100vh - 148px)',
    }
}));

const Table = ({header, content, pagination, title, numSelected, fixed}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <ToolbarWithSortAndSelect
                    title={title}
                    numSelected={numSelected}
                />

                <TableContainer className={!!fixed ? classes.scrollTable : ''}>
                    <MuiTable
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size='medium'
                        aria-label="enhanced table"
                        stickyHeader={!!fixed}
                    >
                        {header}
                        {content}
                    </MuiTable>
                </TableContainer>
                {pagination}
            </Paper>
        </div>
    );
};

export default Table;