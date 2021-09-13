import TableBody from "@material-ui/core/TableBody";
import RowWithSelect from "../Row/RowWithSelect";


const Body = props => {
    const {rows, actions, selected, setSelected} = props;

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    return (
        <TableBody>
            {
                rows?.map((row, index) => {
                    return <RowWithSelect
                        actions={actions}
                        key={row.name}
                        index={index}
                        isSelected={isSelected}
                        row={row}
                        onClick={(event) => handleClick(event, row.name)}
                    />;
                })}
        </TableBody>
    );
};

export default Body;