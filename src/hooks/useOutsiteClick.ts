import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: any) => {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};
