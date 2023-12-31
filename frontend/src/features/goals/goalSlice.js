import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalsService";


const initialState ={
	goals: [],
	isError:false,
	isSucess:false,
	isLoading:false,
	message:''

}
//this is a POST request to from server to database 
export const createGoal = createAsyncThunk('goals/create',async(goalData,thunkAPI)=>{
	try {
		const token = thunkAPI.getState().auth.user.token
		return await goalService.createGoal(goalData,token)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})
//this is a GET line requestes for goals as a getRequest 
export const getGoal = createAsyncThunk('goals/getAll',async(_,thunkAPI)=>{
	try {
		const token = thunkAPI.getState().auth.user.token
		return await goalService.getGoal(token)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})
//DELETE request is used to delete data from the database
export const deleteGoal = createAsyncThunk('goals/deleteIt',
async(id, thunkAPI)=>{
	try {
		const token = thunkAPI.getState().auth.user.token
		return await goalService.deleteGoal(id, token)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})
export const updateGoal = createAsyncThunk('goals/update',async({id,text},thunkAPI)=>{
	try {
		const token = thunkAPI.getState().auth.user.token
return await goalService.updateGoal(id,text,token)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})
export const goalSlice = createSlice({
	name:'goal',
	initialState,
	reducers:{
		reset:(state) => initialState,
	},
	extraReducers:(builder)=>{
		builder
		.addCase(createGoal.pending,(state)=>{
			state.isLoading=true
		})
		.addCase(createGoal.fulfilled,(state,action)=>{
			state.isLoading=false
			state.isSucess=true
			state.goals.push(action.payload)
		})
		.addCase(createGoal.rejected,(state,action)=>{
			state.isLoading=false
			state.isError=true
			state.message=action.payload
		})
		.addCase(getGoal.pending,(state)=>{
			state.isLoading=true
		})
		.addCase(getGoal.fulfilled,(state,action)=>{
			state.isLoading=false
			state.isSucess=true
			state.goals=(action.payload)
		})
		.addCase(getGoal.rejected,(state,action)=>{
			state.isLoading=false
			state.isError=true
			state.message=action.payload
		})
		.addCase(deleteGoal.pending,(state)=>{
			state.isLoading=true
		})
		.addCase(deleteGoal.fulfilled,(state,action)=>{
			state.isLoading=false
			state.isSucess=true
			//action.payload  ---_id--- really fucked me up i went through a lot  
			state.goals = state.goals.filter((goal)=>goal._id !== action.payload._id)
		})
		.addCase(deleteGoal.rejected,(state,action)=>{
			state.isLoading=false
			state.isError=true
			state.message=action.payload
		})
		
		.addCase(updateGoal.pending,(state)=>{
			state.isLoading=true
		})
		.addCase(updateGoal.fulfilled,(state,action)=>{
			state.isLoading=false
			state.isSucess=true
			
		const updatedIndex = state.goals.findIndex((goal) => goal._id === action.payload._id);
            if (updatedIndex !== -1) {
    state.goals[updatedIndex]= action.payload;
  }
		})
		.addCase(updateGoal.rejected,(state,action)=>{
			state.isLoading=false
			state.isError=true
			state.message=action.payload
		})
	}
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer
