import { envVars } from '@/config/env.config';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: envVars.baseUrl,
    withCredentials: true
})

axiosInstance.interceptors.request.use(config => config, error => Promise.reject(error))

axios.interceptors.response.use(response => response, error => {
    return Promise.reject(error);
})