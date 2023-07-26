import { generatePath } from "react-router";

export const indexPattern = "/";
export const getIndexRoute = () => {
  return generatePath(indexPattern);
};