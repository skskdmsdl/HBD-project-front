const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const GOOGLE_AUTH_URL = BASE_URL + '/oauth2/authorization/google';
const REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

export {
    BASE_URL,
    GOOGLE_AUTH_URL,
    REDIRECT_URI
}