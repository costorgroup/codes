export type TCheatsProvider = {
  keyStack: string;
  list: TCheatsProviderListElement[];
  on: (key: string, handler: () => void) => void;
  off: (key: string, handler: () => void) => void;
};

export type TCheatsProviderState = {
  keyStack: string;
  list: TCheatsProviderListElement[];
};

export type TCheatsProviderListElement = {
  key: string;
  handler: () => void;
};
