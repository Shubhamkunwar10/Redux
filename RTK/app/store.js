const configureStore=require("@reduxjs/toolkit").configureStore
const cakeReducer =require("../features/cake/CakeSlice")
const userReducer=require("../features/user/userSlice")
const reduxLogger=require("redux-logger")


const logger=reduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports=store
