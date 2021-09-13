import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import {TableCell} from "@material-ui/core";

const NoItem = props => {
    return (
        <TableRow><TableCell align='center' colSpan={props.length}>آیتمی وجود ندارد</TableCell></TableRow>
    )
};

export default NoItem;