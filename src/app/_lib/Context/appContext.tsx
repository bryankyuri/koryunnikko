'use client'
import { createContext, useCallback,useEffect, useState } from "react";
import Cookies from "js-cookie";
import { addHours } from "date-fns"
type Context = {
  handleLoading: (value: boolean) => void;
  screenWidth: number;
  dateVisit: string;
};


export const AppContext = createContext<Context>({
  handleLoading: () => {},
  screenWidth: -1,
  dateVisit: ""
});

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(-1);
  const [dateVisit, setDateVisit] = useState<string>("");

  const handleLoading = (value: boolean) => {
    setIsloading(value);
  };



  const screenResize = useCallback(() => {
    setScreenWidth(screen.width);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", screenResize);
    return () => {
      window.removeEventListener("resize", screenResize);
    };
  }, [screenResize]);

  useEffect(() => {
    const visit = Cookies.get("visit");
    if (!visit) {
      Cookies.set("visit", `${addHours(new Date(), 3)}`, { expires: addHours(new Date(), 3.5) });
      setDateVisit(`${addHours(new Date(), 3)}`)
    } else {
      setDateVisit(visit)
    }
  }, []);


  useEffect(() => {
    screenResize()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppContext.Provider
      value={{
        handleLoading,
        screenWidth,
        dateVisit,
      }}
    >
      {/* <Loading isLoading={isLoading} /> */}
      {children}
    </AppContext.Provider>
  );
};


