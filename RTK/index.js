const store =require("./app/store")
const cakeActions =require("./features/cake/CakeSlice").cakeActions


console.log(store.getState())

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(cakeActions.ordered(5))
store.dispatch(cakeActions.reStocked(10))
store.dispatch(cakeActions.ordered(5))


unsubscribe()

