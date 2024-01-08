const store =require("./app/store")
const cakeActions =require("./features/cake/CakeSlice").cakeActions
const fetchUser=require("./features/user/userSlice").fetchUser

console.log(store.getState())

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})


// store.dispatch(cakeActions.ordered(3))
// store.dispatch(cakeActions.reStocked(10))
// store.dispatch(cakeActions.ordered(5))

store.dispatch(fetchUser())
store.dispatch(cakeActions.ordered(5))


// unsubscribe()

