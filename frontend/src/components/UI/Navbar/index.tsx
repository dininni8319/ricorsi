import { Link } from 'react-router-dom';
import Logo from '../../../assets/icons/logo_inv2.png';

const Navbar = () => {
    return (
        <nav className="">
            <a href="https://www.cienneffe.com/" target='blank' className=" transparent">
                 <img src={Logo} alt="logo cienneffe" />
            </a>
        
            <div className="">
                <ul className="navbar-nav fs-5">
                    <li className="px-2">
                        <Link to="/">Pagina Initizale</Link>
                    </li>
                    <li className="px-2">
                        <Link to='/ricorsi'>Ricorsi</Link>
                    </li>
    
                    <li className="px-2">
                        <Link to='/work_flow'>Avvia nuovo ricorso</Link>
                    </li>
                
                    <li className="px-2">
                        <a href="/cartoline">Cartoline</a>
                    </li>
                    <li className="px-2">
                        <a href="/cartolineForm">Registrazione Cartoline</a>
                    </li> 
            
                    <li className="px-2">
                        <a href="/riscossione">Lotti di spedizione</a>
                    </li>
                    <li className="px-2">
                        <a href="/form_ricossione">Creazione Lotto di spedizione</a>
                    </li>
                </ul>
        
                <ul>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#"></a>
                    </li>
            
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#"></a>
                    </li>
                
                    <li className="nav-item dropdown">
                        <a id="navbarDropdown" className="nav-link dropdown-toggle text-white fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            
                        </a>
                        {/*   <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none">
                                @csrf
                            </form> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
