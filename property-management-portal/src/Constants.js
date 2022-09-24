import env from "react-dotenv";

const Constants = {
  BASE_URL: env.BASE_URL,
  AUTH_URL: env.AUTH_URL,
  AUTH_REALM: env.AUTH_REALM,
  AUTH_CLIENT_ID: env.AUTH_CLIENT_ID,
  LIMIT_PER_FETCH: env.LIMIT_PER_FETCH
};

export default Constants;