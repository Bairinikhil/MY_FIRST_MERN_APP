import axios from 'axios'
//custom API
const API_URL ='/api/users/'

//Register user
const register = async(userData)=>{
	const response = await axios.post(API_URL,userData)
//over here the axios converts await axios.post(API_URL,userData) as data
	if(response.data){
		localStorage.setItem('user',JSON.stringify(response.data))
	}
	return response.data
}
//login user function
const login = async(userData)=>{
	const response = await axios.post(API_URL + 'login',userData)
//over here the axios converts await axios.post(API_URL,userData) as data
	if(response.data){
		localStorage.setItem('user',JSON.stringify(response.data))
	}
	return response.data
}
//logout User function
const logout =()=>{
 localStorage.removeItem('user')
}
const authService ={register,logout,login}
export default authService