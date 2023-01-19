import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        <h1>Joshua Fajobi</h1>
        <p>Front-End Developer</p>
        <nav className='links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <nav className='icons'>
          <ul>
            <li><a target='_blank' href='https://github.com/Josh-la-posh'><FontAwesomeIcon className="icon" icon={["fab", "github"]} style={{color: '#fff'}} /></a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/jfajobi/'><FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} style={{color: '#fff'}} /></a></li>
            <li><a href="mailto:joshuamayowa23@yahoo.com"><FontAwesomeIcon className="icon" icon="envelope" style={{color: '#fff'}} /></a></li>
            <li><a target='_blank' href='https://www.twitter.com/nova_jy'><FontAwesomeIcon className="icon" icon={["fab", "twitter"]} style={{color: '#fff'}} /></a></li>
            <li><a target='_blank' href='https://www.instagram.com/josh_la_posh'><FontAwesomeIcon className="icon" icon={["fab", "instagram"]} style={{color: '#fff'}} /></a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
