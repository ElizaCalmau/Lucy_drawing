import { Contacts } from "../../cmps/Contacts/Contacts"
import { Title } from "../../cmps/Title/Title"
import './Home.css'

export const Home = () => {
    return(
        <div className="homeWrapper">
            <Title/>
            <Contacts/>
        </div>
    )
}