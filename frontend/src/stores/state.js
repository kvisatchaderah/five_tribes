const views = ['main', 'info']
import { themes } from '@consts'

export default {
  // state
  state: () => {
    return {
      // views
      active_view: views[0],
      views,

      // themes
      active_theme: themes[0],
      themes,
    }
  },

  // actions
  actions: {},
}
