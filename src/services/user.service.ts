import { User } from '@/models/user'
import { UserAPI } from '@/api/user.api'
import { GitHubQuery } from '@/api/base.api'

const api = new UserAPI()

export interface UsersPage {
  total: number;
  users: User[]
}

const search = async (params: GitHubQuery): Promise<UsersPage> => {
  const { items, total_count } = await api.search(params)

  const userPage: UsersPage = {
    total: total_count,
    users: items.map((item: any)=> new User(item.id, item.login, item.name, item.email, item.avatar_url, item.html_url))
  }

  return userPage;
}

export default {
  search
}
