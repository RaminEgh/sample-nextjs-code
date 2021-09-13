import InputValidator from "../FormValidator/InputValidator";

const PriceInput = (props) => {
    return (
            <InputValidator
                required
                defaultValue={props?.defaultValue}
                label='قیمت دوره به ریال'
                type='number'
                name='price'
                InputProps={{
                    min: 0,
                    max: 100000000
                }}
            />
    );
};

export default PriceInput;