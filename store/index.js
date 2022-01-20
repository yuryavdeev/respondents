
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
  conditions: [],

  initialConditions: [
    {
      title: 'Возраст респондента',
      fieldName: 'age',
      id: 1,
      optionsType: 'Диапазон',
      options: ['18-40', '41-99']
    },
    {
      title: 'Тип карты лояльности',
      fieldName: 'cardType',
      id: 2,
      optionsType: 'Тип',
      options: ['Gold', 'Silver', 'Classic']
    },
    {
      title: 'Статус карты лояльности',
      fieldName: 'cardStatus',
      id: 3,
      optionsType: 'Статус',
      options: ['Активна', 'Заблокирована']
    },
  ],

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
    state.currentRootRoute = data.currentRootRoute

  },

  addCondition(state, name) {
    state.conditions.push(state.initialConditions.find(condition => condition.title === name))
  },

  removeCondition(state, id) {
    console.log(state.conditions)
    state.conditions = state.conditions.filter(condition => condition.id !== id)
  }
}


export const actions = {
  async addResult({ state }) {
    try {
      await setTimeout(() => {
        return true
      }, 100)
    } catch (err) {
      console.log(err)
    }
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
  },

  initialConditions(state) {
    return state.initialConditions
  }
}
