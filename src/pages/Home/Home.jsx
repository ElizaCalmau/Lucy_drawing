import { Contacts } from "../../cmps/Contacts/Contacts"
import { Title } from "../../cmps/Title/Title"
import { Nav } from "../../cmps/Nav/Nav"
import './Home.css'

export const Home = () => {
    return(
        <div className="homeWrapper">
            <Title/>
            <Nav/>
            <Contacts/>
        </div>
    )
}