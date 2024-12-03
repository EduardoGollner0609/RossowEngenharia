
import Location from '../../../components/Location';
import './styles.css';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
    return (
        <main>
            <section id="section-about-us">
                <h1>Rossow Engenharia e Tecnologia</h1>
                <div className="about-us-introduction container">
                    <h2>Sobre Nós</h2>
                    <p>A <span>Rossow Engenharia e Tecnologia</span> é uma empresa especializada na execução de <span>projetos e serviços de engenharia</span> integrados, com foco em <span>construções, reformas e manutenções</span>. </p>
                    <p>Com uma sólida trajetória no mercado, atuamos em diversos segmentos, oferecendo soluções completas e personalizadas para atender às necessidades de nossos clientes com excelência e inovação.</p>

                    <p>  Com uma equipe multidisciplinar altamente capacitada, contamos com profissionais especializados nas áreas de
                        <span> engenharia civil, arquitetura, elétrica, segurança do trabalho, cabeamento estruturado, sonorização acústica, combate a incêndio e sistemas integrados de segurança</span>.
                        Nosso compromisso é entregar projetos eficientes, sustentáveis e de alta qualidade, respeitando prazos e orçamentos.</p>

                    <h3>Nossa Missão</h3>
                    <p>Prestar serviços de engenharia e tecnologia, sempre na busca da satisfação do cliente.</p>

                    <h3>Nossa Visão</h3>
                    <p>Crescimento contínuo com qualidade sendo reconhecida pelo mercado como excelente empresa de engenharia.</p>

                    <h3>Nossos Valores</h3>
                    <p><span>• Compromisso:</span> Cumprir com os prazos, orçamentos e qualidade prometidos.</p>
                    <p><span>• Inovação:</span> Buscar sempre soluções criativas e tecnológicas que atendam às necessidades de cada projeto.</p>
                    <p><span>• Segurança:</span> Garantir a segurança em todos os processos, desde a execução até a manutenção. </p>
                    <p><span>• Qualidade:</span> Trabalhar com os mais altos padrões técnicos, garantindo a excelência em todos os serviços prestados.</p>
                    <p><span>• Rentabilidade:</span> Garantir resultados financeiros eficientes, maximizando o retorno sobre o investimento e contribuindo para o crescimento sustentável dos nossos clientes e da empresa.</p>
                    <p>Na <span>Rossow Engenharia e Tecnologia</span>, entendemos que cada projeto é único. Por isso, trabalhamos de forma personalizada, focando nas necessidades e desafios específicos de cada cliente. Estamos sempre em busca de soluções que garantam não apenas a execução impecável, mas também a longevidade e a eficiência dos sistemas implementados.</p>


                    <h3>Nossos Serviços</h3>
                    <span>• Construção e Execução de Obras</span>
                    <br />
                    <span>• Reformas e Manutenções</span>
                    <br />
                    <span>• Projetos de Arquitetura e Engenharia Civil</span>
                    <br />
                    <span>• Instalações Elétricas e Cabeamento Estruturado</span>
                    <br />
                    <span>• Sonorização e Acústica</span>
                    <br />
                    <span>• Sistemas Integrados de Segurança</span>
                    <br />
                    <span>• Combate a Incêndio e Prevenção de Riscos</span>
                    <br />
                    <span>• Consultoria em Segurança do Trabalho</span>
                    <br />
                    <br />
                    <p> Com a <span>Rossow Engenharia e Tecnologia</span>, você tem a garantia de um parceiro estratégico, comprometido com o sucesso de seu projeto. Entre em contato conosco e descubra como podemos transformar suas ideias em realidade com soluções inovadoras e eficazes.</p>
                </div>

                <div className="about-us-page-card-invite container">
                    <div className="about-us-page-card-invite-item">
                        <p>Deseja ver mais sobre nossos serviços?</p>
                        <Link to="/servicos">Sim, quero ver mais.</Link>
                    </div>
                    <div className="about-us-page-card-invite-item">
                        <p>Tem alguma duvida ou deseja falar com a gente?</p>
                        <Link to="/contato">Sim quero falar conosco.</Link>
                    </div>

                </div>
                <div className="about-us-localization container">
                    <Location />
                </div>
            </section>
        </main >
    );
}