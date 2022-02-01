
import callCenter from "../assets/images/call-center.svg"
import user from "../assets/images/user.svg"
import blacklist from "../assets/images/blacklist.svg"
import survey from "../assets/images/survey.svg"

export const state = () => ({
  user: "User #555",
  links: [
    { rootRoute: true, route: "/survey", name: "Опросы", url: survey },
    { rootRoute: true, route: "/users", name: "Пользователи", url: user },
    { rootRoute: true, route: "/blacklists", name: "Черные списки", url: blacklist },
    { rootRoute: true, route: "/call-center", name: "Колл-центр", url: callCenter },
  ],

  currentRootPageName: "", // - "Пользователи"
  currentRootRoute: "", // - "/users"
  currentChildrenPageName: "", // - "Добавить опрос"
  conditions: [],
  initialConditions: [
    {
      title: 'Возраст респондента',
      id: 1,
      optionsType: 'Диапазон',
      options: ['18-40', '41-99']
    },
    {
      title: 'Тип карты лояльности',
      id: 2,
      optionsType: 'Тип',
      options: ['Gold', 'Silver', 'Classic']
    },
    {
      title: 'Статус карты лояльности',
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
  async addResult({ state }, form) {
    // await... -> fetch-запрос -> обновление store
    const newForm = {}
    return newForm
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
