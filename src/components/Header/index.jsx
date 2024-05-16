import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({color: isActive ? 'red' : 'black' }) }
      >Home</NavLink>
      
      <NavLink 
        to="/portfolio"
        style={({ isActive }) => ({color: isActive ? 'red' : 'black' }) }
      >Portfolio</NavLink>
      
      <NavLink
        to="/services"
        style={({ isActive }) => ({color: isActive ? 'red' : 'black' }) }
      >Services</NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({color: isActive ? 'red' : 'black' }) }
      >Contact</NavLink>
    </>
  )
}

export { Header };