import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
        <div className="logo">Joshua</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
