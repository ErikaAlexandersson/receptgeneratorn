import { createStore } from 'vuex'

const state = {
  counter: 0,
  recepieArray: '',
  caloriesChart: '',
  timeChart: 0,
  oneHour: 60,
  selector: false,
  urlParam: ''
}

const mutations = {
  recepiesOutsideComponent(state, responses) {
    state.recepieArray = responses
  },
  caloriesChart(state, newResponse) {
    state.caloriesChart = newResponse.calories
  },
  getTime(state, newValue) {
    state.timeChart = newValue
  },
  queryParam(state, newValue) {
    state.urlParam = newValue
  }
}

export default createStore({ mutations, state, strict: true })
