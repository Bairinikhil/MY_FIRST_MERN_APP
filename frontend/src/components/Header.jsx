import {Link} from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

function Header(){
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {user} = useSelector((state)=>state.auth)

	const onlogout=()=>{
dispatch(logout())
dispatch(reset())
navigate('/')
	}


	return(
		<header className='header'>
			<div className='logo'>
				<Link to='/' >home baby</Link>
			</div>
			<ul>
		
				{user ? (<li>
					<button className='btn' onClick={onlogout}>

						<FaSignOutAlt/>Logout
			
					</button>
				</li>) : (
				<>
				<li>
					<Link to='/login'>
						<FaSignInAlt/>Login
					</Link>
				</li>
				<li>
					<Link to='/register'>
						<FaUserAlt/>Register
					</Link>
				</li>
				</>
)}
			</ul>
		</header>
	)
}
export default Header