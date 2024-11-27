export type Operation = {
  quantity: string;
  activeSymbol: string;
  action: "buy" | "sell";
  userId: string;
  timestamp: number;
};
