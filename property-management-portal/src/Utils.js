import Constants from "./Constants";
import jwt_decode from "jwt-decode";


export function storeToken(token) {
    localStorage.setItem(Constants.AUTH_TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(Constants.AUTH_TOKEN);
}

export function deriveEmailFromToken() {
    return jwt_decode(getToken()).email;
}