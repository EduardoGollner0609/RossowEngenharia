import './styles.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <nav className="container">
                <img src={logo} alt="" />
                <div className="options-navegations">
                    <NavLink to="">
                        Início
                    </NavLink>
                    <NavLink to="">
                        Sobre
                    </NavLink>
                    <NavLink to="">
                        Serviços
                    </NavLink>
                    <NavLink to="">
                        Contato
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}