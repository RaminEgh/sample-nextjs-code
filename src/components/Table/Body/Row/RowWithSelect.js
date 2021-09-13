import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableRow from "@material-ui/core/TableRow";
import {keyGenerator} from "../../../../helpers";

const RowWithSelect = (props) => {

    const labelId = `enhanced-table-checkbox-${props.index}`;
    const isItemSelected = props.isSelected(props.row.name);
    const row = props.row
    const keys = Object.keys(row)
    return (
        <TableRow
            {...props}
            hover
            role="checkbox"
            tabIndex={-1}
            aria-checked={isItemSelected}
            selected={isItemSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </TableCell>

            {
                keys.map((item, index) => {
                    return <>
                        {
                            <TableCell key={keyGenerator()} component="th" id={labelId} scope="row" padding="none">
                                {row[keys[index + 1]]}
                            </TableCell>
                        }
                    </>
                })
            }
        </TableRow>
    );
};

export default RowWithSelect;