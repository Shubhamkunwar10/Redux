const redux = require("redux");

const createStore = redux.createStore;

const bindActioncreator=redux.bindActionCreators

// ActionTypes
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Initial State
const initialState = {
    numOfCakesUsed: 10,
    cakeSold: 0,
    remainingCakes: 10
};

// Actions
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    };
}

function reStockCake(quantity) {
    return {
        type: CAKE_RESTOCKED,
        quantity:quantity
    };
}

// Reducer
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                cakeSold: state.cakeSold + 1,
                remainingCakes: state.remainingCakes - 1
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakesUsed: state.numOfCakesUsed + action.quantity,
                remainingCakes: state.remainingCakes + action.quantity
            };
        default:
            return state;
    }
};

// Store
const store = createStore(cakeReducer);

console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State:", store.getState());
});

const quantity = 4;
// store.dispatch(orderCake());
// store.dispatch(reStockCake(quantity));
// store.dispatch(orderCake());
// store.dispatch(reStockCake(quantity));
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(reStockCake(5));

const actions=bindActioncreator({orderCake,reStockCake},store.dispatch)

actions.orderCake()
actions.orderCake()
actions.reStockCake(5);


unsubscribe();
