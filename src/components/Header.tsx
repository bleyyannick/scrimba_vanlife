import logo from '/images/logo.png';

export default function Header() {
    return (
        <header>
            <img className="logoImg" src={logo} alt="logo" />
         <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Vans</a></li>
            </ul>
         </nav>
        </header>
    );
 }