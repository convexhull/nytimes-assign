import * as actionTypes from './actionTypes';
import Axios from '../../axios/axios';


const fetchArticlesStart = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_START
    }
}


const fetchArticlesSuccess = (fetchedArticles) => {
    console.log("xxx", fetchedArticles);
    return {
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        payload: fetchedArticles
    }
}

export const asyncFetchArticlesStart = () => {
    return async (dispatch) => {
        dispatch(fetchArticlesStart());
        try {
            let apiResponse = await Axios.get('/articlesearch.json?q=election&api-key=QIAT8Y7GtXpHnunOCHrl1As7iqfqAmbk');
            dispatch(fetchArticlesSuccess(apiResponse.data.response.docs));
        } catch(e) {
            console.log(e);
        }
    }


    

}