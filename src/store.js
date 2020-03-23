let redux = require('redux');

const CoronaInitialState = {
    country: ''
}

const allReducer = (state = CoronaInitialState, action) => {
    switch (action.type) {
        case "SEACH_COUNTRY":
            console.log(action.countryCov)
            return {...state, country:action.countryCov}
        default:
            return state
    }
}

let store = redux.createStore(allReducer);

store.subscribe(function(){
    console.log("subscribe",JSON.stringify(store.getState()));
})
export default store;