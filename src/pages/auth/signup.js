import Backdrop from "../../components/Backdrop/Backdrop";
import RegisterForm from "../../components/Auth/Register/RegisterForm";
import {getFormData} from "../../helpers";
import {register} from "../../store/actions/public-action/auth-action";
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from "next/router";
import {useEffect} from "react";
import {_LOGIN} from "../../constants/frontPath";

const Signup = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const {success} = useSelector(state => state.authRdcr)
    const onSubmitHandler = e => {
        const data = getFormData(e, 'signup', false);
        dispatch(register(data));
    }

    useEffect(() => {
        if (success) {
            router.replace(_LOGIN)
        }
    }, [success])

    const handleOnCloseBackdropIconBtn = () => {
        router.back();
    }
    return (
        <div>
            <Backdrop onClickCloseIcon={handleOnCloseBackdropIconBtn} open={true} lock={true}>
                <RegisterForm name='signup' onSubmit={onSubmitHandler}/>
            </Backdrop>
        </div>
    );
};





export default Signup;