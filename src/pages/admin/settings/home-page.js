import Box from "@material-ui/core/Box";
import FormCard from "../../../components/FormCard/FormCard";
import {Grid} from "@material-ui/core";
import SaveButton from "../../../components/Button/SaveButton";
import InputValidator from "../../../components/FormValidator/InputValidator";
import InputFileValidator from "../../../components/FormValidator/InputFileValidator";
import {useDispatch, useSelector} from "react-redux";
import {setHomeSlides} from "../../../store/actions/admin-action/settings-action";
import {useSession} from "next-auth/client";
import {useEffect} from "react";
import {getHomeSlides} from "../../../store/actions/public-action/settings-action";
import {getFormData, keyGenerator} from "../../../helpers";

const HomePage = () => {

    const dispatch = useDispatch();
    const [session, loading] = useSession();
    const homeSlides = useSelector((state) => state.settingRdcr.homeSlides)
    useEffect(() => {
        if (!loading)
            dispatch(getHomeSlides());
    }, [])

    const onSetHomeSlides = e => {
        const data = getFormData(e, 'slide-form');
        dispatch(setHomeSlides(session.accessToken, data))
    };


    return (
        <Box>
            <FormCard onSubmit={onSetHomeSlides} title='اسلایدر صفحه اصلی' name='slide-form'>
                <Grid container spacing={2}>
                    {
                        [0,1,2,3,4,5,6,7].map(i => {
                            return <Grid key={keyGenerator()} item md={3}>
                                <InputFileValidator
                                    required
                                    defaultValue={homeSlides?.[i]?.image || undefined}
                                    accept='image/*'
                                    maxSize={128}
                                    label={`بارگزاری اسلاید ${i + 1}`}
                                    id={`slide${i}`}
                                    name='slide_images[]'
                                />

                                <InputValidator
                                    defaultValue={homeSlides?.[i]?.title || undefined}
                                    label={`عنوان اسلاید ${i + 1}`}
                                    name='slide_titles[]'
                                />

                                <InputValidator
                                    type='url'
                                    defaultValue={homeSlides?.[i]?.link || undefined}
                                    label={`لینک اسلاید ${i + 1}`}
                                    name='slide_links[]'
                                />

                            </Grid>
                        })
                    }
                </Grid>
                <SaveButton/>
            </FormCard>
        </Box>
    );
};

export default HomePage;