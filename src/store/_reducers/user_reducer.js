import {
    ADD_ITEM_1, ADD_ITEM_2, DELETE_ITEM, GLOBAL_SEARCH
} from '../_actions/types';

const initialState = {
    addItem_1: [],
    addItem_2: [],
    addItem_3: [],
    addItem_4: [],
};

let copiedState = {};

const reducers = (state = initialState, action) => {
    let cloneState = { ...state };
    copiedState = { ...state }

    switch (action.type) {
        case ADD_ITEM_1:
            return { ...state, addItem_1: [...state.addItem_1, action.payload] };
        case ADD_ITEM_2:
            let cloneObj = { ...state };
            console.log(action);
            if (action.step === 1) {
                cloneObj = adjustPanel(cloneObj, action, 'addItem_2', 'addItem_1');
            } else if (action.step === 2) {
                if (action.indicator === 'forward') {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_1', 'addItem_2');
                } else {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_3', 'addItem_2');
                }
            } else if (action.step === 3) {
                if (action.indicator === 'forward') {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_2', 'addItem_3');
                } else {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_4', 'addItem_3');
                }
            } else if (action.step === 4) {
                if (action.indicator === 'forward') {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_3', 'addItem_4');
                } else {
                    cloneObj = adjustPanel(cloneObj, action, 'addItem_4', 'addItem_3');
                }
            }
            return { ...cloneObj };


        case GLOBAL_SEARCH:
            let addItem_search_1 = [];
            let addItem_search_2 = [];
            let addItem_search_3 = [];
            let addItem_search_4 = [];

            if (state['addItem_1'].length) {
                addItem_search_1 = state['addItem_1'].filter(item => item.id === action.payload);
            }
            if (state['addItem_2'].length) {
                addItem_search_2 = state['addItem_2'].filter(item => item.id === action.payload);
            }
            if (state['addItem_3'].length) {
                addItem_search_3 = state['addItem_3'].filter(item => item.id === action.payload);
            }
            if (state['addItem_4'].length) {
                addItem_search_4 = state['addItem_4'].filter(item => item.id === action.payload);
            }
            if (action.payload) {
                return { addItem_1: addItem_search_1, addItem_2: addItem_search_2, addItem_3: addItem_search_3, addItem_4: addItem_search_4 }
            }
            return { ...copiedState };

        case DELETE_ITEM:
            let addItem_1 = [];
            let addItem_2 = [];
            let addItem_3 = [];
            let addItem_4 = [];

            if (state['addItem_1'].length) {
                addItem_1 = state['addItem_1'].filter(item => item.id !== action.payload.id);
            }
            if (state['addItem_2'].length) {
                addItem_2 = state['addItem_2'].filter(item => item.id !== action.payload.id);
            }
            if (state['addItem_3'].length) {
                addItem_3 = state['addItem_3'].filter(item => item.id !== action.payload.id);
            }
            if (state['addItem_4'].length) {
                addItem_4 = state['addItem_4'].filter(item => item.id !== action.payload.id);
            }
            if (action.payload.id) {
                return { addItem_1, addItem_2, addItem_3, addItem_4 }
            }

            return { ...cloneState }

        default:
            return state;
    }
}

const adjustPanel = (obj, action, prev, next) => {
    let clonedArr = obj[prev];
    let selectedItem = clonedArr.findIndex((item) => item.id === action.payload.id);
    let spliceElement = clonedArr.splice(selectedItem, 1)
    obj[prev] = [...clonedArr];
    obj[next] = [...obj[next], spliceElement[0]];
    return obj;
}

export default reducers;
