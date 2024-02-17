import * as actions from '../actions/actionTypes'

export const addItem = item => ({
    type: actions.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: actions.REMOVE_ITEM,
    payload: item
})

export const incrItem = item => ({
    type: actions.INCR_QTY,
    payload: item
})

export const decrItem = item => ({
    type: actions.DECR_QTY,
    payload: item
})

export const calcVolume = item => ({
    type: actions.CALC_VOLUME,
})

