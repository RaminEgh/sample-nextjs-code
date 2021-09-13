import Box from "@material-ui/core/Box";
import {memo} from "react";
import {keyGenerator} from "../../../helpers";
import Part from "./Part";

const Parts = props => {
    const {items} = props;
    return (
        <Box pb={4}>
            {
                items?.map(item => {
                    return <Part item={item} key={keyGenerator()}/>
                })
            }
        </Box>
    );
};

export default memo(Parts);