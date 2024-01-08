const configureStore=require("@reduxjs/toolkit").configureStore
const cakeReducer =require("../features/cake/CakeSlice")
const reduxLogger=require("redux-logger")


const logger=reduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports=store
