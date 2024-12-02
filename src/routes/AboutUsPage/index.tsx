import Location from '../../components/Location';
import './styles.css';

export default function AboutUsPage() {
    return (
        <main>
            <section id="section-about-us-">
                <h2>Sobre Nós</h2>
                <div className="about-us-introduction">

                </div>

                <div className="about-us-localization container">
                    <Location />
                </div>
            </section>
        </main>
    );
}