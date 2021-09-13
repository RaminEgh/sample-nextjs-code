import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {getProducts} from "../../../store/actions/admin-action/product-action";
import ProductItem from "../../../components/Product/ProductItem";
import Grid from "@material-ui/core/Grid";
import {keyGenerator} from "../../../helpers";
import Link from "next/link";
import {_ADMIN_PRODUCTS} from "../../../constants/frontPath";

const Index = () => {
    const dispatch = useDispatch();
    const {products, pagination} = useSelector(state => state.adminProductRdcr);
    const [session, loading] = useSession();
    const router = useRouter()
    useEffect(() => {
        const page = router.query.page || 1;
        const params = `?page=${page}`
        dispatch(getProducts(session.accessToken, params))
    }, [router.query]);

    return (
        <Grid container spacing={2}>
            {
                products?.map(product => {
                    return <Grid item key={keyGenerator()} md={3}>
                        <ProductItem item={product}/>
                        <Link href={_ADMIN_PRODUCTS + '/' + product?.slug || ''}>
                            <a>ویرایش</a>
                        </Link>
                    </Grid>
                })
            }
        </Grid>
    );
};

export default Index;