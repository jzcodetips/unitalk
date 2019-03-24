import { SWITCH_MODEL, SET_IS_ORGANE_VISIBLE, SET_IS_LOADED } from 'resources/constants'

export function switchModel(index) {
    return { type: SWITCH_MODEL, index }
}

export function setIsOrganeVisible(index, visible) {
    return { type: SET_IS_ORGANE_VISIBLE, index, visible }
}

export function setIsLoaded(index, loaded) {
    return { type: SET_IS_LOADED, index, loaded }
}