import { NavItem } from "./NavItem/NavItem"
import './Nav.css'

export const Nav = () => {
    return(
        <div className="navWrapper">
            <NavItem name="About me"/>
            <NavItem name="Education"/>
            <NavItem name="My pictures"/>
        </div>
    )
}