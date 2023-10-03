import {Link} from 'react-router-dom'
import { FaSignInAlt, FaUserAlt } from 'react-icons/fa'

function Header(){
	return(
		<header className='header'>
			<div className='logo'>
				<Link to='/' >Go home baby</Link>

			</div>
			<ul>
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
			</ul>
		</header>
	)
}
export default Header