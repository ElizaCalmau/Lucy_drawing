import { useDispatch } from 'react-redux'
import { setCategory } from '../../../store/CategorieSlice/CategorieSlice'
import './NavItem.css'

export const NavItem = ({name}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(setCategory(name))
    }
    return <button className='navButton' onClick={()=>onClick(name)}>{name}</button>
}