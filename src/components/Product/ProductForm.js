import FormCard from "../FormCard/FormCard";
import InputValidator from "../FormValidator/InputValidator";
import PriceInput from "../Input/PriceInput";

const ProductForm = ({data}) => {
    return (
        <FormCard title='ویرایش محصول'>
            <PriceInput
                defaultValue={data?.discount_percent}
            />
            <InputValidator
                defaultValue={data?.discount_percent || 0}
                name='discount_percent'
                label='تخفیف درصدی'
                InputProps={{
                    min: 0,
                    max: 100
                }}
            />

            <InputValidator
                defaultValue={data?.discount_amount || 0}
                name='discount_amount'
                label='تخفیف درصدی'
                InputProps={{
                    min: 0,
                    max: 100000000
                }}
            />
        </FormCard>
    );
};

export default ProductForm;