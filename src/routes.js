import { generatePath } from "react-router";

export const indexPattern = "/";
export const getIndexRoute = () => {
  return generatePath(indexPattern);
};
export const loginPattern = "/login";
export const getLoginRoute = () => {
  return generatePath(loginPattern);
};