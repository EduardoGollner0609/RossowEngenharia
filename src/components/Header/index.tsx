import './styles.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    const [optionsMobile, setOptionsMobile] = useState(false);

    function handleClickOpenMobileOptions() {
        setOptionsMobile(true);
    }
    function handleClickCloseMobileOptions() {
        setOptionsMobile(false);
    }
    return (
        <header>
            <nav className="container">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="options-navegation">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre">
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos">
                                Serviços
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to="/contato">
                                Contato
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClickOpenMobileOptions}>☰</div>
                </div>

            </nav>
            {
                optionsMobile &&
                <>
                    <div className="options-navegation-mobile">
                        <div className="close-mobile-menu-icon" onClick={handleClickCloseMobileOptions}>X</div>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={handleClickCloseMobileOptions}>
                                    Início
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sobre" onClick={handleClickCloseMobileOptions}>
                                    Sobre
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/servicos" onClick={handleClickCloseMobileOptions}>
                                    Serviços
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to="/contato" onClick={handleClickCloseMobileOptions}>
                                    Contato
                                </NavLink>
                            </li>
                        </ul>


                    </div>
                    <div className="overlay-menu">

                    </div>
                </>


            }



        </header>
    );
}