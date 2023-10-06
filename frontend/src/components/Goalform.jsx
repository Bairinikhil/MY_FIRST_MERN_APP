import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createGoal } from '../features/goals/goalSlice'

function Goalform() {
	
	//This is line below is a pure classic reat stuff i mean state
	const [text,setText] = useState(' ')
	const dispatch = useDispatch()

	const onSubmit=(e)=>{
		e.preventDefault()
	dispatch(createGoal({ text }))
		setText(' ')
	}
	

  return (
	<section className='form'>
		<form onSubmit={onSubmit}>
			<div className='form-group'>
				<label htmlFor='text'>Write you goals</label>
				<input
				type='text'
				// this is value is taking the usestate is it variable 
				value={text}
				name='text'
				id='text'
				onChange={(e)=>setText(e.target.value)}
				></input>
				
			</div>
			<div className="form-group">
				<button className='btn btn-block' type='submit'>It's my goal</button>
				</div>
		</form>
	</section>
  )
}

export default Goalform