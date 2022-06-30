import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
const Sidebar = ()=>{
    return(
        <div className = 'nav-bar'> 
            <nav>
                <NavLink exact = 'true' activeclassname = 'active' to= '/'>
                    <FontAwesomeIcon icon={faHome} color = '#4d4d4e'/>
                </NavLink>
                <NavLink exact = 'true' activeclassname = 'active' className='about-link' to= 'about'>
                    <FontAwesomeIcon icon={faUser} color = '#4d4d4e'/>
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact = 'true' className='contact-link' activeclassname = 'active' to= 'contact'>
                    <FontAwesomeIcon icon={faEnvelope} color = '#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' href = 'https://www.linkedin.com/in/andrey-sazanov-93459b231/'><FontAwesomeIcon icon = {faLinkedin}/></a>
                </li> 
                <li>
                    <a target='_blank' href = 'https://github.com/Andrey-Sazanov?tab=repositories'><FontAwesomeIcon icon = {faGithub}/></a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar