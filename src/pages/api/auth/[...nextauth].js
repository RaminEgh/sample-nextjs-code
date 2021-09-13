import Providers from "next-auth/providers";
import NextAuth from "next-auth";
import axios from "axios";

const callbacks = {}
const providers = [
    Providers.Credentials({
        async authorize(credentials, req) {
            const response = await axios.post(process.env.BASE_API + '/login', credentials);
            if (response.data)
                return response.data;
            else if (response.errors)
                return response.errors;
            return false;
        }
    })
];

callbacks.jwt = async function jwt(token, user, account, profile, isNewUser) {
    // Add access_token to the token right after signin
    if (user) token = { accessToken: user.access_token, type: user.type};
    return token
};

callbacks.redirect = async function redirect(url, baseUrl) {
    return url.startsWith(baseUrl)
        ? url
        : baseUrl
}



callbacks.signIn = async function signIn (user, account, profile) {
    return !!user.access_token
};

callbacks.session = async function session(session, token) {
    session.accessToken = token.accessToken;
    session.user.type = token.type;
    return session
}

const session = {
    maxAge: 3600 , // 7 days
    updateAge: 600 // 2 hours
}



const options = {
    providers,
    callbacks,
    session,
}

export default (req, res) => NextAuth(req, res, options)