import './styles.css';

type Props = {
    name: string;
    closeCardSuccess: () => void;
}

export default function CardEmailSuccess({ name, closeCardSuccess }: Props) {
    return (
        <div className="overlay-message-success">
            <div className="card-message-success">
                <div className="card-message-success-close">
                    <p onClick={closeCardSuccess}>X<span>fechar</span></p>
                </div>

                <h4>Mensagem enviada</h4>
                <p>Obrigado senhor(a) {name}, em breve responderemos sua mensagem.</p>
            </div>
        </div>
    )
}