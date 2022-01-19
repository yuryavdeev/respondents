
export const state = () => ({
  user: "Alexandr C.",
  links: [
    { rootRoute: true, route: "/survey", name: "Опросы" },
    { rootRoute: true, route: "/users", name: "Пользователи" },
    { rootRoute: true, route: "/blacklists", name: "Черные списки" },
    { rootRoute: true, route: "/call-center", name: "Колл-центр" },
  ],
  currentRootPageName: "", // - "Пользователи"
  currentRootRoute: "", // - "/users"
  currentChildrenPageName: "", // - "Добавить опрос"

  conditions: [
    {
      title: 'Возраст респондента',
      fieldName: 'age',
      id: 1,
      optionsType: 'Диапазон',
      options: [
        { number: 1, from: 18, to: 40 },
        { number: 2, from: 41, to: 99 },
      ]
    },
  ]
})


export const mutations = {
  setCurrentRootPageName(state, route) {
    state.links.forEach((item) => {
      if (item.route === route) {
        state.currentRootPageName = item.name
        state.currentRootRoute = item.route
      }
    })
    state.currentChildrenPageName = ''
  },

  setCurrentChildrenPageName(state, data) {
    state.currentRootPageName = data.currentRootPageName
    state.currentChildrenPageName = data.currentChildrenPageName
  },

  removeCondition(state, id) {
    state.conditions = state.conditions.filter(condition => {
      condition.id !== id
    })
  }
}


export const getters = {
  user(state) {
    return state.user
  },

  links(state) {
    return state.links
  },

  currentRootPageName(state) {
    return state.currentRootPageName
  },

  currentRootRoute(state) {
    return state.currentRootRoute
  },

  currentChildrenPageName(state) {
    return state.currentChildrenPageName
  },

  conditions(state) {
    return state.conditions
  }
}
