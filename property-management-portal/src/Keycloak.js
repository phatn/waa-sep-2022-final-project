import Keycloak from "keycloak-js";
import KEYCLOAK_URL from "constant/APIConstant";

export const keycloak = new Keycloak({
    url: KEYCLOAK_URL,
    realm: 'PropertyPortal',
    clientId: 'property-management-portal'
})