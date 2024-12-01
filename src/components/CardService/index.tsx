import './styles.css'


type Props = {
    imgUrl: string;
    description: string;
}

export default function CardService({ imgUrl, description }: Props) {
    return (
        <div className="card-service-item">
            <img src={imgUrl} alt="" />
            <p>{description}</p>
        </div>
    );
}