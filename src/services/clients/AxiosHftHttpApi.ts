import { HftHttpApi } from "../interfaces/HftHttpApi";
import { Operation } from "../types/Operation";
import { AbstractHttpClient } from "./AbstractHttpClient";

export class AxiosHftHttpApi extends AbstractHttpClient implements HftHttpApi {
  constructor(url: string) {
    super({ baseUrl: url });
  }

  async getOperationsHistory(userId: string) {
    const response = (
      await this.api.get<{ code: number; data: Operation[] }>(
        `/operations/history/${userId}`
      )
    ).data;
    return response.data;
  }
}
