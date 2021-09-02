import { createStore } from 'vuex'

export default createStore({
  state: {
    bill: 0,
    tipPerPerson: '0.00',
    numberOfPeople: 0,
    amountPerPerson: '0.00'
  },
  mutations: {
    tipPerPerson(state, load) {
      // state.bill = load
      state.tipPerPerson = load.tip
      state.amountPerPerson = (parseFloat(load.tip) + parseFloat(load.perPerson)).toFixed(2)
    }
  },
  actions: {
    tipPerPerson(context, load) {
      context.commit('tipPerPerson', load)
    }
  },
  modules: {
  },
  getters: {
    bill(state) {
      return state.bill
    },
    numberOfPeople(state) {
      return state.numberOfPeople
    },
    amountPerPerson(state) {
      return state.amountPerPerson
    },
    tipPerPerson(state) {
      return state.tipPerPerson
    }
  }
})
