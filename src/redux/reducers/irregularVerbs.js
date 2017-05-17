import { FETCH_IRREGULAR_VERBS } from '../actions/IrregularVerbsActions'

const initialState = {
  verbs: [],
}

const irregularVerbs = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_IRREGULAR_VERBS: {
      const { data } = payload

      return {
        ...state,
        verbs: data,
      }
    }

    default:
      return state
  }
}

export default irregularVerbs
