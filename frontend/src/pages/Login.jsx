import React, { useState ,useEffect} from 'react'
import { FaSign, FaSignInAlt, FaUser } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {reset} from '../features/auth/authSlice'
import Spinner from '../components/Spineer'
import { login } from '../features/auth/authSlice'
import Spineer from '../components/Spineer'

function Login() {
 const  [fromData, setData ] =  useState({
		email:'',
		password:'',
	})
	const {email,password} = fromData
	const navigate= useNavigate()
	const dispatch = useDispatch()

	const {user,isError,isSucess,isLoading, message} = useSelector((state)=>state.auth)

useEffect(()=>{
if(isError){
	toast.error(message)
}
if(isSucess){
	navigate('/')
}
dispatch(reset())

},[user,isError,isLoading,isSucess,navigate,dispatch,message])	


	function onChange(e){
		e.preventDefault()
		setData((prevstate)=>({
			...prevstate,
			[e.target.name]:e.target.value
		}))
		

	}
	function onSubmit(e){

		e.preventDefault()
			const userData ={
			
				email,
				password,
			}
			dispatch(login(userData))

		}
		if(isLoading){
			return <Spinner/>

	}



  return (
	<>
	<section className='heading'>
		<h1>
			<FaSignInAlt/> Login
		</h1>
		<p>Prove Yourself with this Values my King</p>
	</section>
	<section className='form'>

<form onSubmit={onSubmit}>

	<div className='form-group'>
	<input type='email' className='form-control'
	id='email' name='email' value={email} placeholder='Enter email plaease'
	onChange={onChange}>	
	</input>

	</div>


	<div className='form-group'>
	<input type='password' className='form-control'
	id='password' name='password' value={password} placeholder='Enter password'
	onChange={onChange}>
	</input>
	</div>

	<div className='form-group'>
		<button type='submit' className='btn btn-block'>
		submit
		</button>
	</div>
</form>

	</section>
	</>
  )
}

export default Login