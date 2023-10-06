import axios from "axios";

const API = '/api'


const createGoal = async(goalData,token)=>{
	const config ={
		headers :{
			Authorization:`Bearer ${token}`,
		},
	}
	const response = await axios.post(API,goalData,config)

	return response.data
}
const updateGoal = async(id,text,token)=>{
	const config ={
		headers :{
			Authorization:`Bearer ${token}`,
		},
	}
	const response = await axios.put(`${API}/${id}`,{text},config)

	console.log(response.data)
	return response.data
	
}

const getGoal = async(token)=>{
	const config ={
		headers :{
			Authorization:`Bearer ${token}`,
		},
	}
	const response = await axios.get(API,config)

	return response.data
}
//DELETE request to the backend api or that one i created
const deleteGoal = async(goalId,token)=>{
	const config ={
		headers :{
			Authorization:`Bearer ${token}`,
		},
	}
	const response = await axios.delete(`${API}/${goalId}`,config)

	return response.data
}

const goalService= {
	createGoal,
	getGoal,
	deleteGoal,
	updateGoal
}
export default goalService