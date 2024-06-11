"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TCodesProvider, TCodesProviderState } from "./types";

export const CodesContext = createContext<TCodesProvider>({
  list: [],
  keyStack: "",
  on: (_a, _b) => {},
  off: (_a, _b) => {},
});

export const useCodes = () => useContext(CodesContext);

export const CodesProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<TCodesProviderState>({
    list: [],
    keyStack: "",
  });

  const value = useMemo(() => {
    const on = (key: string, handler: () => void) => {
      setState((prev) => ({
        ...prev,
        list: [...prev.list, { key, handler }],
      }));
    };

    const off = (key: string, handler: () => void) => {
      setState((prev) => ({
        ...prev,
        list: prev.list.filter(
          (listItem) => !(key === listItem.key && handler === listItem.handler)
        ),
      }));
    };

    return { ...state, on, off };
  }, [state]);

  useEffect(() => {
    state.list.forEach((listItem) => {
      if (!state.keyStack.endsWith(listItem.key)) return;
      listItem.handler();
    });
  }, [state.keyStack, state.list]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      setState((prev) => {
        const maximumCheatLength = Math.max(
          0,
          ...prev.list.map((listItem) => listItem.key.length)
        );
        const newStack = prev.keyStack + String.fromCharCode(e.charCode);
        const trimmedStack = newStack.substring(
          newStack.length - maximumCheatLength
        );
        return { ...prev, keyStack: trimmedStack };
      });
    };
    window.addEventListener("keypress", handle);
    return () => {
      window.removeEventListener("keypress", handle);
    };
  }, []);

  return (
    <CodesContext.Provider value={value}>{children}</CodesContext.Provider>
  );
};

export default CodesProvider;
