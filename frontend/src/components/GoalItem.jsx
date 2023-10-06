import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal,updateGoal } from '../features/goals/goalSlice'
import { FaUserEdit } from 'react-icons/fa'
import { update } from 'lodash'

function GoalItem({goal}) {
	const [isEditing, setIsEditing] = useState(false)
	const [editedText, setEditedText] = useState(goal.text);
	const dispatch = useDispatch()

const handleEditClick=()=>{
	setIsEditing(true)
}
const handleSaveClick=()=>{
dispatch(updateGoal({id:goal._id,text: editedText}))
setIsEditing(false)
}
const handleCancelClick=()=>{
	setEditedText(goal.text)
	setIsEditing(false)
}

  return (
	<div className='goal'>
		<div>{new Date(goal.createdAt).toLocaleString('en-US')}
		</div>
		{isEditing ? (
			<div>
          <input
            type='text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
		   <button onClick={handleSaveClick} >
            Save
          </button>
          <button onClick={handleCancelClick}>
            Cancel
          </button>
		  </div>
		):(
			<>
			<h2>{goal.text}</h2>
		 <FaUserEdit onClick={handleEditClick} className='edit'/>
			</>
		)}
		
		<button onClick={()=>dispatch(deleteGoal(goal._id))} className='close'>X
		</button>

	</div>
  )
}

export default GoalItem