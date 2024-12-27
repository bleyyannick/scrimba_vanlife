import { Link } from 'react-router';
import logo from '/images/logo.png';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img className="logoImg" src={logo} alt="logo" />
            </Link>
         <nav>
            <ul>
              <li><Link to ="/about">About</Link></li>
              <li><Link to="/vans">Vans</Link></li>
            </ul>
         </nav>
        </header>
    );
 }