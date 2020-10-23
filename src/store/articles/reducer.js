import { act } from 'react-dom/test-utils';
import * as actionTypes from './actionTypes';

const initState = {
    articlesToDisplay: []
}

const reducer = (state = initState, action) => {

    switch(action.type) {

        case actionTypes.FETCH_ARTICLES_START:
            return {
                ...state
            }
        case actionTypes.FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                articlesToDisplay: action.payload
            }
        default:    
            return state;
    }
}


export default reducer;