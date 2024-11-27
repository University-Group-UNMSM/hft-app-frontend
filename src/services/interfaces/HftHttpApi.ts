import { Operation } from "../types/Operation";

export interface HftHttpApi {
  getOperationsHistory(userId: string): Promise<Operation[]>;
}
