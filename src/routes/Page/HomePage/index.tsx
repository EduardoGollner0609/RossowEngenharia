import CardApresentation from '../../../components/CardApresentation';
import './styles.css';

export default function HomePage() {

    const textoMissao: string = "Prestar serviços de engenharia e tecnologia, sempre na busca da satisfação do cliente."
    const textoVisao: string = "Crescimento contínuo com qualidade sendo reconhecida pelo mercado como excelente empresa de engenharia."

    return (

        <main>
            <section id="section-home-page">
                <div className="home-page-content container">

                    <div className="home-page-card-invite">
                        <h2>Engenharia com qualidade</h2>
                        <p>Seus projetos dos sonhos podem se tornar realidade com muita qualidade e carinho da Rossow Engenharia, conheça mais sobre nós.</p>
                        <a href="">Quero conhecer mais</a>
                    </div>
                </div>

            </section>
            <section id="section-home-page-introduction">

                <div className="home-page-introduction container">
                    <h1>Rossow Engenharia e Tecnologia</h1>

                    <div className="home-page-about-us-cards-list">
                        <CardApresentation title="Missão" description={textoMissao} />
                        <CardApresentation title="Visão" description={textoVisao} />
                        <div className="card-apresentation">
                            <h3>Valores</h3>
                            <p>• Comprometimento com o cliente;</p>
                            <p>• Rentabilidade;</p>
                            <p>• Qualidade.</p>
                        </div>
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
                <h3>Nosso clientes</h3>
            </section>

        </main>
    );
}