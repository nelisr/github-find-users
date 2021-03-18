import { User } from '@/models/user';
import { BaseAPI, GitHubQuery } from '@/api/base.api';

export class UserAPI extends BaseAPI<User> {
  public async search(query: GitHubQuery): Promise<any> {
    try {
      const params = Object.entries(query).map(i=>`${i[0]}=${i[1]}`).join("&")
      return await this.axios.get(`${this.apiUrl}/search/users?${params}`);
    } catch (error) {
      throw Error(error.message)
    }
  }
}
