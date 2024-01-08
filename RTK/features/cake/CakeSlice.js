//toolkit convection

const createSlice=require("@reduxjs/toolkit").createSlice

const initialState={
    noOfCakes:10,
}
const cakeSlice=createSlice({
        name:"cake",
        initialState,
        //auto action for reducers -> ordered, reStocked
        reducers:{
            ordered:(state,action)=>{
                state.noOfCakes-=action.payload
            },
            reStocked:(state,action)=>{
                state.noOfCakes+=action.payload
            }
        },
    })


module.exports=cakeSlice.reducer

module.exports.cakeActions=cakeSlice.actions