import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    axios.defaults.baseURL = config.public.__BASE_URL__;
});