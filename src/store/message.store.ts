export const messageStore = {
  state: {
    message: {
      type: '',
      text: '',
      show: false
    }
  },
  mutations: {
    setMessage(state: any, value: any) {
      state.message = value
    },

  },
  actions: {
    ADD_MESSAGE({ commit }: any, value: any) {
      commit('setMessage', value)
    },
    CLEAR_MESSAGE({ commit }: any) {
      commit('setMessage', {type: '', text: '', show: false})
    }
  },
}
