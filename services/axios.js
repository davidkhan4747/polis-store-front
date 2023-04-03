import axios from "axios";
import { useRouter } from "next/router";

export function getAPIСlient( url) {
//  const router = useRouter()
  const api = axios.create({
    baseURL: "http://s499964.smrtp.ru/api/",
    
  });

  api.interceptors.request.use((config) => {
    return config;
  });
  

  return api;
  
}
