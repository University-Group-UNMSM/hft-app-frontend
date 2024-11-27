import { Operation } from "../types/Operation";

export interface HftHttpApi {
  getOperationsHistory(userId: string): Promise<Operation[]>;
  register(name: string, email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<string>;
}
