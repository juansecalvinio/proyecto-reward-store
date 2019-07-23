import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../utils/api'

const INITIAL_STATE = {
    error: null,
    loading: false,
    products: [],
    user: {},
    history: [],
    points: '',
}

function appReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_REQUEST': {
            return {
                ...state,
                loading: true,
            }
        }

        case 'FETCH_FAILURE': {
            const { error } = action.payload;
            return {
                ...state,
                error,
                loading: false,
            }
        }
        default: {
            return state
        }

        case 'FETCH_PRODUCTS_SUCCESS': {
            const { products } = action.payload;
            return {
                ...state,
                products,
                loading: false,
            }
        }        

        case 'FETCH_USER_SUCCESS': {
            const { user } = action.payload;
            return {
                ...state,
                user,
                loading: false,
            }
        }

        case 'FETCH_HISTORY_SUCCESS': {
            const { history } = action.payload;
            return {
                ...state,
                history,
                loading: false,
            }
        }
    }
}

// THUNK
const getProductsRequest = () => {
    
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const products = await api.getProducts();
            dispatch(fecthProductsSuccess(products));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
    
}

const getUserRequest = () => {
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const user = await api.getUser();
            console.log(user);
            dispatch(fetchUserSuccess(user));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const getHistoryRequest = () => {
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const history = await api.getHistory();
            dispatch(fetchHistorySuccess(history));
        } catch (error) {
            dispatch(fecthFailure(error));            
        }
    }
}

const addPointsRequest = (amount) => {
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const user = await api.addPoints(amount);
            dispatch(fetchUserSuccess(user))
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

// ACTION CREATORS
const fecthRequest = () => {
    return {
        type: 'FETCH_REQUEST',
    }
}

const fecthFailure = error => {
    return {
        type: 'FETCH_FAILURE',
        payload: { error },
    }
}

const fecthProductsSuccess = products => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: { products },
    }
}

const fetchUserSuccess = user => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: { user },
    }
}

const fetchHistorySuccess = history => {
    return {
        type: 'FETCH_HISTORY_SUCCESS',
        payload: { history },
    }
}

// MIDDLEWARE
const middlewares = applyMiddleware(thunk);
const store = createStore(appReducer, middlewares);

export { store as default, getProductsRequest, getUserRequest, getHistoryRequest, addPointsRequest };