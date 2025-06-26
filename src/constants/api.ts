export const ENVIRONMENT: string = import.meta.env.VITE_ENVIRONMENT;
export const BACKEND_PORT: number = import.meta.env.VITE_BACKEND_PORT;
export const LOCAL_BACKEND_ROOT_API: string = import.meta.env
  .VITE_BACKEND_ROOT_API;
export const CHANNEL_ID: string = import.meta.env.VITE_CHANNEL_ID;
export const SUB_TO_CHANNEL_URL: string = `https://youtube.com/channel/${CHANNEL_ID}/?sub_confirmation=1`;
export const GET_VIDEOS_ROUTE: string = "/videos";
