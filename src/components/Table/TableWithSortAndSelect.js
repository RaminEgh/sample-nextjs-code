import HeadWithSortAndSelect from "./Head/HeadWithSortAndSelect";
import Body from "./Body/Body/Body";
import {useState} from "react";
import Table from "./Table";
import {memo} from "react";
import Pagination from "../Pagination/Pagination";
import {_ADMIN_USERS} from "../../constants/frontPath";


const TableWithSortAndSelect = (props) => {
    const {rows, actions, heads, pagination} = props;

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const header = <HeadWithSortAndSelect
        heads={heads}
        numSelected={selected.length}
        order={order}
        orderBy={orderBy}
        onSelectAllClick={handleSelectAllClick}
        onRequestSort={handleRequestSort}
        rowCount={rows?.length}
    />;

    let content = rows ? <Body
        actions={actions}
        rows={rows}
        page={pagination?.current_page || 1}
        order={order}
        orderBy={orderBy}
        selected={selected}
        setSelected={setSelected}
    /> : null;


    return (
        <Table
            title='کاربران'
            header={header}
            content={content}
            pagination={<Pagination pagination={pagination} url={_ADMIN_USERS}/>}
            numSelected={selected.length}
            fixed
        />
    );
}


export default memo(TableWithSortAndSelect);