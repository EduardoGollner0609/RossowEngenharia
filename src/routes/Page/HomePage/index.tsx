import CardApresentation from '../../../components/CardApresentation';
import './styles.css';
import arcelorMittalImg from '../../../assets/arcelor-mittal-img.png';
import ifesImg from '../../../assets/ifes-img.png';
import philipsImg from '../../../assets/philips-img.jpg';
import plamontImg from '../../../assets/plamont-img.jpg';
import walmartImg from '../../../assets/walmart-img.png';
import multivixImg from '../../../assets/multivix-vitoria-img.png';
import policiaMilitarImg from '../../../assets/policia-militar-img.jpg';
import technipImg from '../../../assets/technip-img.png';
import stemacImg from '../../../assets/stemac-img.jpg';
import expressoJundiaiImg from '../../../assets/expresso-jundiai-img.png';
import engerEngenhariaImg from '../../../assets/enger-engenharia-img.jpg';

export default function HomePage() {

    const textoMissao: string = "Prestar serviços de engenharia e tecnologia, sempre na busca da satisfação do cliente.";
    const textoVisao: string = "Crescimento contínuo com qualidade sendo reconhecida pelo mercado como excelente empresa de engenharia.";
    const textoValores: string = "Comprometimento com o cliente, inovação, segurança, qualidade e rentabilidade.";

    return (

        <main>
            <section id="section-home-page">
                <div className="home-page-content container">

                    <div className="home-page-card-invite">
                        <h2>Engenharia com qualidade</h2>
                        <p>Seus projetos dos sonhos podem se tornar realidade com muita qualidade e carinho da Rossow Engenharia, conheça mais sobre nós.</p>
                        <a href="#section-home-page-introduction">Quero conhecer mais</a>
                    </div>
                </div>

            </section>
            <section id="section-home-page-introduction">

                <div className="home-page-introduction container">
                    <h1>Rossow Engenharia e Tecnologia</h1>

                    <div className="home-page-about-us-cards-list">
                        <CardApresentation title="Missão" description={textoMissao} />
                        <CardApresentation title="Visão" description={textoVisao} />
                        <CardApresentation title="Valores" description={textoValores} />
                    </div>
                    <div className="home-page-about-us-description-resume">
                        <p>A <span>Rossow Engenharia</span> tem como filosofia o atendimento personalizado com o objetivo de satisfazer as necessidades do cliente, sendo em diferencial de mercado numa área bastante competitiva.</p>
                    </div>

                </div>
            </section>
            <section id="section-home-page-performances">
                <div className="home-page-about-us-performances container">
                    <h3>Atuações</h3>
                    <div className="home-page-about-us-performances-options">
                        <p>Atuamos nas áreas de:</p>
                        <p>• Civil</p>
                        <p>• Arquitetura</p>
                        <p>• Elétrica</p>
                        <p>• Cabeamento Estruturado</p>
                        <p>• Sistema Integrado de Segurança Eletrônica (CFTV, Alarme, Controle de acesso, etc.)</p>
                        <p>• Segurança do Trabalho</p>
                        <br />
                        <p>Combate a Incêndio. com a realização de</p>
                        <p>• Projetos</p>
                        <p>• Execuções</p>
                        <p>• Construções</p>
                        <p>• Reformas</p>
                        <p>• Manutenção</p>
                        <p>• Consultorias</p>
                    </div>

                </div>

            </section>
            <section id="section-home-page-clients">
                <div className="home-page-clients-contet container">
                    <div className="home-page-clients-top">
                        <h3>Nosso clientes</h3>
                    </div>
                    <div className="home-page-clients-bottom">
                        <img src={arcelorMittalImg} alt="" />
                        <img src={ifesImg} alt="" />
                        <img src={philipsImg} alt="" />
                        <img src={plamontImg} alt="" />
                        <img src={walmartImg} alt="" />
                        <img src={multivixImg} alt="" />
                        <img src={policiaMilitarImg} alt="" />
                        <img src={technipImg} alt="" />
                        <img src={stemacImg} alt="" />
                        <img src={expressoJundiaiImg} alt="" />
                        <img src={engerEngenhariaImg} alt="" />
                    </div>
                </div>

            </section>

        </main>
    );
}