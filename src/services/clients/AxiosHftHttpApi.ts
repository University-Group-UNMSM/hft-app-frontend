import { HftHttpApi } from "../interfaces/HftHttpApi";
import { Operation } from "../types/Operation";
import { AbstractHttpClient } from "./AbstractHttpClient";

export class AxiosHftHttpApi extends AbstractHttpClient implements HftHttpApi {
  constructor(url: string) {
    super({ baseUrl: url });

    this.api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
  }

  async getOperationsHistory() {
    const response = (
      await this.api.get<{ code: number; data: Operation[] }>(
        `/operations/history/000`
      )
    ).data;
    return response.data;
  }

  async register(name: string, email: string, password: string) {
    await this.api.post("/auth/register", { name, email, password });
  }

  async login(email: string, password: string) {
    const response = (
      await this.api.post<{ token: string }>("/auth/login", {
        email,
        password,
      })
    ).data;
    return response.token;
  }
}
