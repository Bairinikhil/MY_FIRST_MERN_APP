import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
//over here the JSon.parse is converting things to string it means words
const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
	user:user? user: null,
	isError:false,
	isSucess:false,
	isLoading:false,
	message:''
}
//Register User
export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{
	try {

	//from the below line if its success then it sends a payload
		return await authService.register(user)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})
//login user stuff
export const login = createAsyncThunk('auth/login',async(user,thunkAPI)=>{
	try {

	//from the below line if its success then it sends a payload
		return await authService.login(user)
	} catch (error) {
		const message =(error.response && error.response.data && 
			error.response.data.message )|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
	}
})


//logout user
export const logout=createAsyncThunk('auth/logout',async()=>{
	 await authService.logout()
})
export const authSlice = createSlice({
	name:'auth',
	initialState,
	reducers:{
		reset:(state)=>{
			state.isLoading = false
			state.isError = false
			state.message = ''
			state.isSucess = false

		}
	},
	extraReducers:(builder)=>{
		builder
		//these 3 are default fields od redux as Yes No Pending 
		.addCase(register.pending,(state)=>{
			state.isLoading = true
		})

		.addCase(register.fulfilled,(state,action)=>{
			state.isLoading = false
			state.isSucess = true
			state.user = action.payload

		})
		.addCase(register.rejected,(state,action)=>{
			state.isLoading = false
			state.isError = true
			state.message = action.payload
			state.user = null
		})
		.addCase(login.pending,(state)=>{
			state.isLoading = true
		})

		.addCase(login.fulfilled,(state,action)=>{
			state.isLoading = false
			state.isSucess = true
			state.user = action.payload

		})
		.addCase(login.rejected,(state,action)=>{
			state.isLoading = false
			state.isError = true
			state.message = action.payload
			state.user = null
		})
		.addCase(logout.fulfilled,(state)=>{
			state.user = null
		})


	}
})

export const {reset} = authSlice.actions
export default authSlice.reducer