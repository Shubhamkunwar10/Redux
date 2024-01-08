const { default: axios } = require("axios")
const redux=require("redux")
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require("redux-thunk").thunk

const initialState={
    loading:false,
    data:[],
    error:''
}

const FETCH_USER_REQUESTED="FETCH_USER_REQUESTED"
const FETCH_USER_SUCCEEDED="FETCH_USER_SUCCEEDED"
const FETCH_USER_FAILED="FETCH_USER_FAILED"

const fetchUserRequest=(users)=>{
    return{
        type:FETCH_USER_REQUESTED,
        payload:users
    }
}
const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCEEDED,
        payload:users
    }
}
const fetchUserFailed=(error)=>{
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}


const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
        return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCEEDED:
        return {
            ...state,
            loading:false,
            data:action.payload
        }
        case FETCH_USER_FAILED:
        return {
            loading:false,
            data:[],
            error:action.payload
        }
    }

}


const fetchUser=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            const users=res.data.map((user)=>user.address)
            dispatch(fetchUserSuccess(users))
        }).catch((err)=>{
            dispatch(fetchUserFailed(err.message))
        })
    }
}



const store=createStore(userReducer,applyMiddleware(thunkMiddleware))

console.log("Initial State:", store.getState());

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())
