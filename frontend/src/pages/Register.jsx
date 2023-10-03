import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
	const  [fromData, setData ] =  useState({
		name:'',
		email:'',
		password:'',
		password2:''
	})
	const {name,email,password,password2} = fromData
	function onChange(e){
		e.preventDefault()
		setData((prevstate)=>({
			...prevstate,
			[e.target.name]:e.target.value
		}))
		

	}
	function onSubmit(){}
  return (
	<>
	<section className='heading'>
		<h1>
			<FaUser/> Register
		</h1>
		<p>Please create account be Legit</p>
	</section>
	<section className='form'>

<form onSubmit={onSubmit}>
	<div className='form-group'>
	<input type='text' className='form-control'
	id='name' name='name' value={name} placeholder='type your name'
	onChange={onChange}
	>

	
	</input>
	</div>
	<div className='form-group'>
	<input type='email' className='form-control'
	id='email' name='email' value={email} placeholder='Enter email plaease'
	onChange={onChange}
	>

	
	</input>
	</div>
	<div className='form-group'>
	<input type='password' className='form-control'
	id='password' name='password' value={password} placeholder='Enter password'
	onChange={onChange}>
	</input>
	</div>


	<div className='form-group'>
	<input type='password' className='form-control'
	id='password' name='password' value={password2} placeholder='Re-type password2'
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

export default Register