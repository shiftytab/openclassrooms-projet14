import styled from "styled-components"
import {APP_NAME} from '@/Meta';
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Navbar() {
  return (
    <Container>
        <Toaster/>
        <Nav>
            <Title>{APP_NAME}</Title>
        </Nav>
        <Menu>
            <MenuItem to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</MenuItem>
            <MenuItem to="/new" className={({ isActive }) => isActive ? "active" : ""}>New</MenuItem>
        </Menu>
    </Container>
  )
}


const Container = styled.div`
    margin-bottom: 30px;
    
`
const Nav = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
`

const Title = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 2em;
    text-transform: uppercase;
`

const Menu = styled.div`
    padding: 15px;
    background: #1c80e4;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
`

const MenuItem = styled(NavLink)`
    padding: 5px 15px;
    transition: all .05 ease-in-out all;
    cursor:pointer;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: .9em;
    color: #fff;
    font-weight: 600;
    margin: 0 2.5px;
    
    &:hover,
    &.active
    {
        transition: all .05 ease-in-out all;
        background: rgba(255,255,255,.1);
    }
`
