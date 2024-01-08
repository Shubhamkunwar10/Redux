const createSlice=require("@reduxjs/toolkit").createSlice
const createSyncThunk=require("@reduxjs/toolkit").createAsyncThunk
const axios=require("axios")

const initialState={
    users:[],
    loading:false,
    error:''
}

//generated pending, fulfilled and rejected

const fetchUser=createSyncThunk("user/fetchUser",()=>{
   return axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
        res.data.map((user)=>user.id)
    )
})

const user= createSlice({
    name:"user",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUser.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=""
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error
        })
    }
})

module.exports=user.reducer
module.exports.fetchUser=fetchUser