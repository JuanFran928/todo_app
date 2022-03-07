import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import useUser from '../../hooks/useUser'

const Navbar = ({ currentUser, Logout }) => {


  const { isLogged, logout } = useUser()
  const handleClick = e => {
    e.preventDefault()
    logout()
  }





  return (
    <>
      <Nav>
        <NavLink to='/'>
          Todo
        </NavLink>
        <Bars />
        {
              !isLogged ? <NavMenu>
              <NavBtn>
                <NavBtnLink to='/sign-up'>
                  Sign Up
                </NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
              </NavBtn>
            </NavMenu> : <NavMenu>
              <NavBtn>
                <NavBtnLink to ='#' onClick={logout}>Logout</NavBtnLink>
              </NavBtn>
            </NavMenu>
        }
      </Nav>
    </>
  );
};

export default Navbar;

