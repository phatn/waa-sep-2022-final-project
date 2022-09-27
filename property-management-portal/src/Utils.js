import Constants from "./Constants";

export function storeToken(token) {
    localStorage.setItem(Constants.AUTH_TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(Constants.AUTH_TOKEN);
}