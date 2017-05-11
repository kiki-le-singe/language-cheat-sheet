import irregularVerbsData from '../../data/irregular-verbs.json'

export const FETCH_IRREGULAR_VERBS = 'FETCH_IRREGULAR_VERBS'

export const constants = {
  FETCH_IRREGULAR_VERBS,
}

export const fetch = () => ({
  type: FETCH_IRREGULAR_VERBS,
  payload: {
    data: irregularVerbsData
  }
})

export const actions = {
  fetch,
}
