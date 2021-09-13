import {useEffect} from "react";
import {signOut} from "next-auth/client";

const signout = () => {

    useEffect(() => {
        signOut().then(() => {
            window.location.replace(process.env.BASE_APP_URL);
        })
    })

    return (
        <h3 textAlign="center">
            در حال خروج
        </h3>
    );
};

export default signout;