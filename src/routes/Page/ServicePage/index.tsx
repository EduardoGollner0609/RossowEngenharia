import './styles.css';
import service1 from '../../../assets/restauro-itau.avif';
import service2 from '../../../assets/restauro-itau.avif';
import service3 from '../../../assets/restauro-itau.avif';
import service4 from '../../../assets/restauro-itau.avif';
import service5 from '../../../assets/restauro-itau.avif';
import service6 from '../../../assets/restauro-itau.avif';
import service7 from '../../../assets/restauro-itau.avif';
import service8 from '../../../assets/restauro-itau.avif';
import service9 from '../../../assets/restauro-itau.avif';
import service10 from '../../../assets/restauro-itau.avif';
import service11 from '../../../assets/restauro-itau.avif';
import CardService from '../../../components/CardService';

export default function ServicePage() {
    return (
        <main>
            <section id="section-services-page-examples">
                <div className="services-examples-content container">
                    <h2>Serviços</h2>
                    <div className="services-list-example">
                        <CardService imgUrl={service1} description='Restuaro do Banco Itaú do Parque Moscoso' />

                    </div>

                </div>

            </section>
        </main>
    );
}