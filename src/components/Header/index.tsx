import './styles.css';
import logo from '../../assets/logo.jpg';


export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="" />
            </nav>
        </header>
    );
}