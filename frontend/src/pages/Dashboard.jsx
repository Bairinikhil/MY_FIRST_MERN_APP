import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import Goalform from '../components/Goalform'
import { getGoal,reset } from '../features/goals/goalSlice'
import Spineer from '../components/Spineer'
import GoalItem from '../components/GoalItem'

function Dashboard() {
const dispatch = useDispatch()
const navigate = useNavigate()

  const {user} = useSelector((state)=>state.auth)
  
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/login')
    }
    dispatch(getGoal()) 
    //  return ()=>{
    //   dispatch(reset())
    // }
  },[user,navigate,dispatch,message,isError])

   if (isLoading) {
    return <Spineer />
  }

  return(
    <>
    <section className='heading'>
    <h1>Welcome {user ? user.name : 'King'}</h1>
    <p>Here is your goals</p>
    </section>

    <Goalform/>

    <section className='content'>
      {goals.length > 0 ? (
        <div className='goals'>
          {goals.map((goal)=>(
          <GoalItem key={goal._id} goal={goal}/>
          ))}
        </div>
      ):(<h3>You dont have any goals</h3>)}
    </section>
    </>

  )

}

export default Dashboard