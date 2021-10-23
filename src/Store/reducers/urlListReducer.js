import { SAVE_URL_LIST } from "../../actionTypes";

const INITIAL_STATE = {
    data: null
};


export default function(state = INITIAL_STATE, action = {}) {
    const updatedState = {...state};
    switch (action.type) {
        case SAVE_URL_LIST:
            updatedState.data = action.values.data;
            break;
    
        default:
            break;
    }

    return updatedState;
};

