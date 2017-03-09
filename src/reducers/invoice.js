import {types} from '../actions/invoice';

export default (state = {}, action) => {
    switch (action.type) {
        case types.REEX_LOAD_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        default :
            return state;
    }
};
