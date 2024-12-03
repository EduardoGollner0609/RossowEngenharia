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
                <Link to="/inicio">
                    <img src={logo} alt="" />
                </Link>
                <div className="options-navegation">
                    <ul>
                        <li>
                            <NavLink to="/inicio" className={({ isActive }) =>
                                isActive ? "option-navegation-header" : ""
                            }>
                                <p>
                                    Início
                                </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" className={({ isActive }) =>
                                isActive ? "option-navegation-header" : ""
                            }>
                                <p>
                                    Sobre
                                </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos" className={({ isActive }) =>
                                isActive ? "option-navegation-header" : ""
                            }>
                                <p>
                                    Serviços
                                </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" className={({ isActive }) =>
                                isActive ? "option-navegation-header" : ""
                            }>
                                <p>
                                    Contato
                                </p>
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
                                <NavLink to="/inicio" onClick={handleClickCloseMobileOptions} className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile" : ""
                                }>
                                    <p>
                                        Início
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sobre" onClick={handleClickCloseMobileOptions} className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile" : ""
                                }>
                                    <p>
                                        Sobre
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/servicos" onClick={handleClickCloseMobileOptions} className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile" : ""
                                }>
                                    <p>
                                        Serviços
                                    </p>
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to="/contato" onClick={handleClickCloseMobileOptions} className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile" : ""
                                }>
                                    <p>
                                        Contato
                                    </p>
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