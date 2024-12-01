import './styles.css';
import service1 from '../../../assets/restauro-itau.avif';
import service2 from '../../../assets/manutencao-agencia-itau.avif';
import service3 from '../../../assets/iluminação-tomadas-pier-carvão.avif';
import service4 from '../../../assets/projeto-eletrico-hospital-santa-leopoldina.avif';
import service5 from '../../../assets/projeto-eletrico-spda.avif';
import service6 from '../../../assets/projeto-eletrico-rid.avif';
import service7 from '../../../assets/reforma-fachada.avif';
import service8 from '../../../assets/reforma-fachadas-ed-light-tower.avif';
import service9 from '../../../assets/laudo-termografico-blue-ray.avif';
import service10 from '../../../assets/manutencao-fachada.avif';
import service11 from '../../../assets/nr2-img.avif';
import service12 from '../../../assets/projeto-sonorização-acustica-igreja-bom-pastor.avif';
import service13 from '../../../assets/projeto-video-technip.avif';
import service14 from '../../../assets/projeto-uso-mutuo-ultracom.avif';
import service15 from '../../../assets/projeto-combate-incendio-catedral.avif';

import CardService from '../../../components/CardService';
import CardServiceZoom from '../../../components/CardServiceZoom';

export default function ServicePage() {
    return (
        <main>
            <section id="section-services-page-examples">
                <div className="services-examples-content container">
                    <h2>Serviços</h2>
                    <div className="services-list-example">
                        <CardService imgUrl={service1} description='Restauro do Banco Itaú do Parque Moscoso' />
                        <CardService imgUrl={service2} description='Manutenção das agências do Itaú do ES' />
                        <CardService imgUrl={service3} description='Projeto de Iluminação e tomadas do Pier de carvão - VALE - ES' />
                        <CardService imgUrl={service4} description='Projeto Elétrico da Subestação Aérea do Hospital de Santa Leopoldina - ES' />
                        <CardService imgUrl={service5} description='Projeto Elétrico/SPDA/Telefonia do Ed. Residencial Garten - Jardim da Penha' />
                        <CardService imgUrl={service6} description='Projeto Elétrico da Subestação Aérea da RID - Civit' />
                        <CardService imgUrl={service7} description='Reforma das fachadas do Ed. Atenas - Jardim da Penha' />
                        <CardService imgUrl={service8} description='Reforma das fachadas do Ed. Light Tower - Santa Lúcia' />
                        <CardService imgUrl={service9} description='Laudo termográfico na Blue Bay - Cariacica ES' />
                        <CardService imgUrl={service10} description="Manutenção nas Fachadas do Ed. Carrara D' Itália - Santa Helena" />
                        <CardService imgUrl={service11} description='Adequação à NR 12 das Máquinas e Equipamentos da RID' />
                        <CardService imgUrl={service12} description='Projeto de Sonorização e Acústica da Igreja Bom Pastor Campo Grande - ES' />
                        <CardService imgUrl={service13} description='Projeto de Vídeo Monitoramento do Pátio de Estocagem da TECHNIP - Vitória ES' />
                        <CardService imgUrl={service14} description='Projeto de Uso Mútuo da Ultracom' />
                        <CardService imgUrl={service15} description='   Projeto de Combate a Incêndio da Catedral Metropolitana de Vitória' />
                    </div>

                </div>
            </section>
        </main>
    );
}