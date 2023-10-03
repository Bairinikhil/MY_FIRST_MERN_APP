import React, { useState } from 'react'
import { FaSign, FaSignInAlt, FaUser } from 'react-icons/fa'


function Login() {
 const  [fromData, setData ] =  useState({
		email:'',
		password:'',
	})
	const {email,password} = fromData
	function onChange(e){
		e.preventDefault()
		

	}
	function onSubmit(){}
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