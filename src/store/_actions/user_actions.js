import {
    ADD_ITEM_1, ADD_ITEM_2, DELETE_ITEM, GLOBAL_SEARCH
} from './types';

export function addItemAction(payload) {
    return {
        type: ADD_ITEM_1,
        payload
    }
}

export function addItem1To2(payload, step, indicator) {
    return {
        type: ADD_ITEM_2,
        payload,
        step,
        indicator
    }
}

export function globalSearch(payload) {
    return {
        type: GLOBAL_SEARCH,
        payload
    }
}

export function deleteItem(payload) {
    return {
        type: DELETE_ITEM,
        payload
    }
}