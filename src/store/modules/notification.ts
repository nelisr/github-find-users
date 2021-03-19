export const notification = {
  namespaced: true,
  state: {
    message: {
      type: '',
      text: '',
      show: false
    },
    snackbar: {
     show: false
    }
  },
  mutations: {
    setMessage(state: any, value: any) {
      state.message = value
    },
    setSnackBar(state: any, value: boolean) {
      state.snackbar.show = value
    }
  },
  actions: {
    ADD_MESSAGE({ commit }: any, value: any) {
      commit('setMessage', value)
    },
    CLEAR_MESSAGE({ commit }: any) {
      commit('setMessage', {type: '', text: '', show: false})
    },
    SHOW_SNACKBAR({ commit }: any, value: Boolean) {
      commit('setSnackBar', value)
    }
  },
}
