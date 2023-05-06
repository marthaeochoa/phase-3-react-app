import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <nav>
            <NavLink to='/'>Blog Index</NavLink>
            <NavLink to='/blog-form'> Blog Form</NavLink>
        </nav>
    )
}

export default NavBar;