import './styles.css';

export default function Location() {

    return (
        <div className="location">
            <h2>Nosso <span>Endereço</span></h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.9128270171896!2d-40.300692523963356!3d-20.303875081170276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c2d73a14c3%3A0xad8f7bdb67794423!2sCondom%C3%ADnio%20do%20Edificio%20Light%20Tower%20-%20R.%20Aleixo%20Netto%2C%20322%20-%20sala%20307%20-%20Santa%20Lucia%2C%20Vit%C3%B3ria%20-%20ES%2C%2029056-100!5e0!3m2!1spt-BR!2sbr!4v1733121636101!5m2!1spt-BR!2sbr"
                width="850"
                height="450"
                style={{ border: "0;" }}
                loading="lazy"></iframe>
        </div >
    );
}