import { SWITCH_MODEL, SET_IS_ORGANE_VISIBLE, SET_IS_LOADED } from 'resources/constants'

const initialState = {
  models: [
    { name: "Masculin", isOrgane: true, isLoaded: false, isOrganeVisible: false },
    { name: "Féminin", isOrgane: true, isLoaded: false, isOrganeVisible: false },
    { name: "Muscle", isOrgane: false, isLoaded: false },
    { name: "Squelette", isOrgane: false, isLoaded: false },
  ],
  modelSelected: 0,
  message: "Aucun résultat"
}

export default function main(state = initialState, action) {
  switch (action.type) {
    case SWITCH_MODEL:
      return {
        ...state,
        modelSelected: action.index,
      }
    case SET_IS_ORGANE_VISIBLE:
      state.models[action.index] = {
        ...state.models[action.index],
        isOrganeVisible: action.visible
      }
  
      return {
        ...state,
      }
    case SET_IS_LOADED:
      state.models[action.index] = {
        ...state.models[action.index],
        isLoaded: action.loaded
      }

      return {
        ...state
      }
    default:
      return state
  }
}