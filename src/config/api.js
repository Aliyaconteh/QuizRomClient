const LIVE_API_URL = import.meta.env.VITE_SOCKET_URL;
const LOCAL_API_URL = "http://localhost:5000";

const browserApiUrl = () => {
  if (typeof window === "undefined") return LIVE_API_URL;

  const { hostname } = window.location;
  return hostname === "localhost" || hostname === "127.0.0.1"
    ? LOCAL_API_URL
    : LIVE_API_URL;
};

const envApiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const API_BASE_URL = envApiBaseUrl || browserApiUrl();

export const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL || API_BASE_URL;

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};
