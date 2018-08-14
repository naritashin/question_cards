const question = {
  namespaced: true,
  state: {
    first: null,
    second: null,
    third: null,
    forth: null,
    fifth: null
  },
  mutations: {
    SET_ANSWER_FIRST(state, answer) {
      state.first = answer
    },
    SET_ANSWER_SECOND(state, answer) {
      state.second = answer
    },
    SET_ANSWER_THIRD(state, answer) {
      state.third = answer
    },
    SET_ANSWER_FORTH(state, answer) {
      state.forth = answer
    },
    SET_ANSWER_FIFTH(state, answer) {
      state.fifth = answer
    }
  },
  actions: {
    setAnswerFirst({
      commit
    }, answer) {
      commit('SET_ANSWER_FIRST', answer)
    },
    setAnswerSecond({
      commit
    }, answer) {
      commit('SET_ANSWER_Second', answer)
    },
    setAnswerThird({
      commit
    }, answer) {
      commit('SET_ANSWER_Third', answer)
    },
    setAnswerForth({
      commit
    }, answer) {
      commit('SET_ANSWER_Forth', answer)
    },
    setAnswerFifth({
      commit
    }, answer) {
      commit('SET_ANSWER_Fifth', answer)
    }
  }
}

export default question;
