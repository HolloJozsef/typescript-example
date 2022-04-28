import {React,useContext} from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import authService from '../services/auth.service'
import { UserContext } from './UserContext';

const Navbar = () => {
  const {user,setUser} = useContext(UserContext)
  const handleLogout=()=>{
    authService.logout()
    setUser(null)
  }
  return (
    <header>
      <Nav>
        <NavLink to='/'>
          <img src={require('../images/logo.png')} alt='logo' width="150px"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {user?(<NavLink to='/bucket-list' activeStyle>
            Bucket List
          </NavLink>):null}
          <NavLink to='/contact-us' activeStyle>
          Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
            {user?( <NavBtnLink to='/logout' onClick={handleLogout}>Logout</NavBtnLink>):(<NavBtnLink to='/login'>Sign In</NavBtnLink>)}
        </NavBtn>
      </Nav>
    </header>
  );
};

export default Navbar;