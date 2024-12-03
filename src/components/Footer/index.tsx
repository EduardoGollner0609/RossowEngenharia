import './styles.css';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content container">
                <h2>Rossow Engenharia e Tecnologia</h2>
                <div className="footer-options">

                    <div className="footer-treatment">
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <a href="">
                                    <img src={whatsappIcon} alt="" />
                                    <p> (027) 99872-6089</p>
                                </a>
                            </li>


                            <li>
                                <a href="">
                                    <img src={InstagramIcon} alt="" />
                                    <p> rossoweng</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={facebookIcon} alt="" /> Aquiles Eler Rossow
                                </a>
                            </li>
                        </ul>
                    </div>




                    <div className="footer-details-enterprise">
                        <p>ROSSOW ENGENHARIA E TECNOLOGIA LTDA , pessoa jurídica de direito privado, inscrita no CNPJ sob o n.º 11.329.662/0001-26, IE 082.678.42-1, com sede na Rua Aleixo Neto, n.º 322, Santa Lucia, Vitoria/ES, sala 307. </p>
                    </div>

                    <div className="footer-sections">
                        <h4>Seções</h4>
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
                    </div>

                </div>

            </div>
        </footer>
    );
}