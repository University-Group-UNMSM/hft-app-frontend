import { Operation } from "../types/Operation";

export interface HftHttpApi {
  getOperationsHistory(userId: string): Promise<Operation[]>;
  createInitialBalance(balance: number): Promise<void>;
  addHolding(activeSymbol: string, quantity: number): Promise<void>;
  register(name: string, email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<string>;
}
