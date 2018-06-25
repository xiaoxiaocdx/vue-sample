import * as type from './type'
const mutations = {
  [type.HANDEL_CHANGE] (state, action) {
    state.menu.selected = action.data
  },
  [type.CHANGE_DIALOG] (state) {
    state.dialog.show = !state.dialog.show
  }
}

const actions = {
  [type.HANDEL_CHANGE] (context, payload) {
    context.commit(type.HANDEL_CHANGE, {
      data: payload.selected
    })
  },
  [type.CHANGE_DIALOG] (context) {
    context.commit(type.CHANGE_DIALOG)
  }
}

export default {
  state: {
    menu: {
      selected: 'welfare'
    },
    dialog: {
      show: false
    }
  },
  mutations,
  actions
}
