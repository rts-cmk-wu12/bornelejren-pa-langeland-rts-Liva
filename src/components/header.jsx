import { Link } from "react-router";
import '../scss/components/header.scss';

function Header({ currentPage }) {
    return (
        <header className="header">
            <p className="header__slogan">Børnelejren på Langeland</p>
            <Link to="/"><img src="/logo-wide.svg" alt="logo" className="header__logo" /></Link>
            <nav>
                <ul className="header__menu">
                    <li><Link to="/" className={`header__menu-link ${currentPage === 'index' ? 'active' : ''}`}>Forside</Link></li>
                    <li><Link to="/about-us" className={`header__menu-link ${currentPage === 'about' ? 'active' : ''}`}>Om os</Link></li>
                    <li><Link to="/sponser" className={`header__menu-link ${currentPage === 'sponser' ? 'active' : ''}`}>Tilmeld som sponser</Link></li>
                    <li><Link to="/thanks" className={`header__menu-link ${currentPage === 'thanks' ? 'active' : ''}`}>Børnlejren takker</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;