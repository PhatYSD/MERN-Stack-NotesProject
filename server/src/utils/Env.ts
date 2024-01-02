import { cleanEnv, str, num } from "envalid";

const Env = cleanEnv(process.env, {
    APP_HOST: str(),
    APP_PORT: num(),
    DATABASE_URI: str()
});

export default Env;