import UserService from "@/services/user.service";
import {User} from "@/models/user"

export const userStore = {
  state: {
    users: {
      content: [],
      pagination: {
        q: "a",
        page: 1,
        per_page: 20,
        sort: "login",
        order: "desc"
      },
      isLoading: false,
      total: 0
    }
  },
  mutations: {
    setIsLoading(state: any, value: boolean) {
      state.users.isLoading = value
    },
    setPagination(state: any, value: any) {
      state.users.pagination = value
    },
    setUsers(state: any, value: User[]) {
      state.users.content.push(...value)
    },
    setTotal(state: any, value: number) {
      state.users.total = value
    },
    setClearUser(state: any) {
      state.users.content = []
    }
  },
  actions: {
    async SEARCH_USERS({ commit, dispatch, state }: any) {
      commit('setIsLoading', true)
      dispatch("ADD_MESSAGE", {
        type: "",
        message: '',
        show: false
      })

      try {
        const { total, users } = await UserService.search(state.users.pagination)
        commit('setUsers', users)
        commit('setTotal', total)
        commit('setIsLoading', false)
      } catch (error) {
        commit('setIsLoading', false)
        dispatch("ADD_MESSAGE", {
          type: "warning",
          message: error.message,
          show: true
        });
        commit('setUsers', [])
        commit('setTotal', 0)
      }
    },
    SET_IS_LOADING({ commit }: any, value: boolean) {
      commit('setIsLoading', value)
    },
    SET_PAGINATION({commit}: any, value: any) {
      commit('setPagination', value)
    },
    SET_TOTAL({commit}: any, value: number) {
      commit('setTotal', value)
    },
    CLEAR_USERS({commit}: any) {
      commit('setClearUser')
    }
  },
}
