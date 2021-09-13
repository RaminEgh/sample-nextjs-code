import {memo} from 'react';
import Box from "@material-ui/core/Box";
import Link from "next/link";
import {_LOGIN, _REGISTER} from "../../constants/frontPath";
import Button from "../Button/Button";

const RedirectHelpLink = props => {
    return (
        <Box textAlign='center' alignContent='center' alignItems='center' px={3} mt={4}>
            {props.desc}
            <Link href={props.type === 'in' ? _LOGIN : _REGISTER}>
                <Button variant='text' text={props.type === 'in' ? 'ورود' : 'ثبت نام'} />
            </Link>
        </Box>
    );
};

export default memo(RedirectHelpLink);