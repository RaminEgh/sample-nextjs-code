import Box from "@material-ui/core/Box";
import Button from "../Button/Button";
import {_HOME} from "../../constants/frontPath";
import Link from 'next/link';
import Typography from "@material-ui/core/Typography";

const E404 = () => {
    return <Box textAlign='center' py={8}>
        <Typography component='h1' variant={"h4"} color='textSecondary'>صفحه مورد نظر یافت نشد</Typography>
        <br/>
        <Link href={_HOME}>
            <a>
                <Button text='رفتن به صفحه اصلی'/>
            </a>
        </Link>
    </Box>
};

export default E404;