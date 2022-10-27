import sharedGetters from '@/shared/store/getters'

export default {
  ...sharedGetters(),
  isConfigured: (
    state,
    getters,
    rootState,
    rootGetters
  ) => {
    return (
      rootGetters['auth/currentSettings'].website !== null
    )
  },

  publishedRows: (state, getters) => {
    return getters.rows.filter((c) => c.published)
  },

  hasSettingsVisible: (state) => {
    return state.settingsVisible
  }
}