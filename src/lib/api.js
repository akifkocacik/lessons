import { instance } from './fetch';

export class API {
  static async get(url) {
    const res = await instance.get(url);
    return res.data;
  }
}
