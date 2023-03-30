import { createContext, useContext } from "react";

const ScrollDirectionContext = createContext(null);

export const useScrollDirection = () => {
  return useContext(ScrollDirectionContext);
};

export default ScrollDirectionContext;
