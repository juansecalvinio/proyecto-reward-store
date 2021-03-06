import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../utils/api'

const INITIAL_STATE = {
    allActive: true,
    error: null,
    history: [],
    highestActive: false,
    loading: false,
    lowestActive: false,
    points: '',
    products: [],
    product: {},
    redeem: {},
    user: {},
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

        case 'FETCH_PRODUCTS_SUCCESS': {
            const { products } = action.payload;
            return {
                ...state,
                products,
                loading: false,
            }
        }

        case 'FETCH_PRODUCT_REQUEST': {
            return {
                ...state,
                loading: true,
            }
        }

        case 'FETCH_PRODUCT_SUCCESS': {
            const { product } = action.payload;
            return {
                ...state,
                product,
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

        case 'ACTIVE_SORTER_HIGHEST': {
            return {
                ...state,
                highestActive: true,
                lowestActive: false,
                allActive: false,
            }
        }

        case 'ACTIVE_SORTER_LOWEST': {
            return {
                ...state,
                highestActive: false,
                lowestActive: true,
                allActive: false,
            }
        }

        case 'ACTIVE_ALL': {
            return {
                ...state,
                highestActive: false,
                lowestActive: false,
                allActive: true,
            }
        }

        case 'ADD_POINTS_SUCCESS': {
            const { points } =  action.payload
            return {
                ...state,
                user: {
                    ...state.user,
                    'points': points,
                },
                loading: false,
            }
        }

        case 'REDEEM_PRODUCT_SUCCESS': {
            const { redeem } = action.payload
            return {
                ...state,
                redeem,
                loading: false,
            }
        }

        default: {
            return {
                ...state
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
            dispatch(fetchUserSuccess(user));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const getProductRequest = id => {
    return async function(dispatch) {
        try {
            dispatch(fetchProductRequest());
            const products = await api.getProducts();
            const product = products.find(item => item._id === id);
            dispatch(fetchProductSuccess(product));
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

const addPointsRequest = (value) => {
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const response = await api.addPoints(value);
            const points = response['New Points'];
            dispatch(addPointsSuccess(points));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const activeHighest = () => {
    return function(dispatch) {
        try {
            dispatch(activeSorterHighest());
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const activeLowest = () => {
    return function(dispatch) {
        try {
            dispatch(activeSorterLowest());
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const activeAll = () => {
    return function(dispatch) {
        try {
            dispatch(activeSorterAll());
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const sorterProductsHighest = (products) => {
    return function(dispatch) {
        try {
            const productsSortered = api.getProductsHigherPrice(products);
            dispatch(fecthProductsSuccess(productsSortered));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const sorterProductsLowest = (products) => {
    return function(dispatch) {
        try {
            const productsSortered = api.getProductsLowerPrice(products);
            dispatch(fecthProductsSuccess(productsSortered));
        } catch (error) {
            dispatch(fecthFailure(error));
        }
    }
}

const redeemProductRequest = productId => {
    return async function(dispatch) {
        try {
            dispatch(fecthRequest());
            const redeem = await api.redeemProduct(productId);
            dispatch(redeemProductSuccess(redeem));
            dispatch(getUserRequest());
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

const fetchProductRequest = () => {
    return {
        type: 'FETCH_PRODUCT_REQUEST',
    }
}

const fetchProductSuccess = product => {
    return {
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: { product },
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

const activeSorterHighest = () => {
    return {
        type: 'ACTIVE_SORTER_HIGHEST',
    }
}

const activeSorterLowest = () => {
    return {
        type: 'ACTIVE_SORTER_LOWEST',
    }
}

const activeSorterAll = () => {
    return {
        type: 'ACTIVE_ALL',
    }
}

const addPointsSuccess = points => {
    return {
        type: 'ADD_POINTS_SUCCESS',
        payload: { points }
    }
}

const redeemProductSuccess = redeem => {
    return {
        type: 'REDEEM_PRODUCT_SUCCESS',
        payload: { redeem }
    }
}

// MIDDLEWARE
const middlewares = applyMiddleware(thunk);
const store = createStore(appReducer, middlewares);

export { store as default, 
    getProductsRequest,
    getUserRequest,
    getHistoryRequest,
    getProductRequest,
    addPointsRequest,
    activeHighest,
    activeLowest,
    activeAll,
    sorterProductsHighest,
    sorterProductsLowest,
    redeemProductRequest,
};