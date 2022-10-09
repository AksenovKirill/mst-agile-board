import { useContext } from "react";
import { StoreContext } from "../index.js";

export const useStore = () => {
  return useContext(StoreContext);
};
