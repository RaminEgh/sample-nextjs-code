import FormCard from "../../../components/FormCard/FormCard";
import InputValidator from "../../../components/FormValidator/InputValidator";
import PriceInput from "../../../components/Input/PriceInput";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProduct, updateProduct} from "../../../store/actions/admin-action/product-action";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {getFormData} from "../../../helpers";
import SaveButton from "../../../components/Button/SaveButton";
import Select from "../../../components/Input/Select";


const Product = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {slug} = router.query;
    const [session, loading] = useSession();
    const {product, publishes, sellings, stocks, types} = useSelector(state => state.adminProductRdcr);

    useEffect(() => {
        if (!loading)
            dispatch(getProduct(session.accessToken, slug))
    }, [])

    const onSubmit = (e) => {
        const data = getFormData(e, 'edit-form', false)
        dispatch(updateProduct(session.accessToken, slug, data))
    }
    if (!product) return null;
    return (
        <div>
            <FormCard title='ویرایش محصول' onSubmit={onSubmit} name='edit-form'>
                <PriceInput
                    defaultValue={product?.price}
                />

                <InputValidator
                    name='discount_percent'
                    type='number'
                    label='تخفیف به درصد'
                    defaultValue={product?.discountPercent || 0}
                    InputProps={{
                        min:0,
                        max:100
                    }}
                />

                <InputValidator
                    name='discount_amount'
                    type='number'
                    label='تخفیف به تومان'
                    defaultValue={product?.discountAmount || 0}
                    InputProps={{
                        min:0,
                        max:99999999
                    }}
                />


                <Select
                    required
                    value={product?.type}
                    name='type'
                    label='نوع محصول'
                    options={types}
                />

                <Select
                    required
                    value={product?.publishStatus}
                    name='publish_status'
                    label='وضعیت انتشار محصول'
                    options={publishes}
                />

                <Select
                    required
                    value={product?.stock}
                    name='stock'
                    label='موجودی محصول'
                    options={stocks}
                />


                <Select
                    required
                    value={product?.sellingType}
                    name='selling_type'
                    label='نحوه فروش محصول'
                    options={sellings}
                />
                <SaveButton/>

            </FormCard>
        </div>
    );
};

export default Product;