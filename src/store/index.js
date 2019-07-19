import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../utils/api'

const INITIAL_STATE = {
    error: null,
    loading: false,
    products: [],
    redeem: false,
    user: ''
}

function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS_REQUEST': {
            return {
                ...state,
                loading: true,
            }
        }

        case 'FETCH_PRODUCTS_SUCCESS': {
            const { products } = action.payload;
            return {
                ...state,
                products,
                loading: false,
            }
        }

        case 'FETCH_PRODUCTS_FAILURE': {
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
    }
}

// THUNK
const getProductsRequest = () => {
    
    return async function(dispatch) {
        try {
            dispatch(fecthProductsRequest());
            const products = await api.getProducts();
            dispatch(fecthProductsSuccess(products));
        } catch (error) {
            dispatch(fecthProductsFailure(error));
        }
    }
    
}

// ACTION CREATORS
const fecthProductsRequest = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST',
    }
}

const fecthProductsSuccess = products => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: { products },
    }
}

const fecthProductsFailure = error => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: { error },
    }
}

// MIDDLEWARE
const middlewares = applyMiddleware(thunk);
const store = createStore(productsReducer, middlewares);

export { store as default, getProductsRequest };