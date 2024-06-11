export type TCodesProvider = {
  keyStack: string;
  list: TCodesProviderListElement[];
  on: (key: string, handler: () => void) => void;
  off: (key: string, handler: () => void) => void;
};

export type TCodesProviderState = {
  keyStack: string;
  list: TCodesProviderListElement[];
};

export type TCodesProviderListElement = {
  key: string;
  handler: () => void;
};
