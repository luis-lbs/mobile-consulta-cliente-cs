import axios from "axios";

interface AxiosResponse {
  data: {}
}

export class api {
  private api: any
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    })
  }
  async get(url: string) {
    return await this.api.get(url).then((response: AxiosResponse) => response.data)
  }
}