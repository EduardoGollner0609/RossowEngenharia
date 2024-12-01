import './styles.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


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
                <img src={logo} alt="" />

                <div className="options-navegation">
                    <ul>
                        <li>
                            <NavLink to="">
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
                                <NavLink to="">
                                    Início
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/serviços">
                                    Sobre
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    Serviços
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to="">
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