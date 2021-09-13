import {Typography} from "@material-ui/core";
import {addSeperatorToPrice} from "../../helpers";

const Price = ({price, finalPrice, align, variant}) => {
    return (
        <>
            {
                price !== finalPrice ?
                    <Typography gutterBottom variant={variant || 'h6'} color={"secondary"} align={align || 'center'}
                                component={"del"}>
                        {addSeperatorToPrice(price / 10)} تومان
                    </Typography> : null
            }

            <Typography gutterBottom variant={variant || 'h6'} color={"secondary"} align={align || 'center'}
                        component={"strong"}>
                {addSeperatorToPrice(finalPrice / 10)} تومان
            </Typography>
        </>
    );
}
;

export default Price;