import { useDispatch } from 'react-redux'
import { setCategory } from '../../../store/CategorieSlice/CategorieSlice'
import { useHistory } from 'react-router-dom';
import './NavItem.css'

export const NavItem = ({name}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const onClick = () => {
        dispatch(setCategory(name))
        history.push('/aboutme')
    }
    return <button className='navButton' onClick={()=>onClick(name)}>{name}</button>
}