import './styles.css';

type Props = {
    title: string,
    description: string;
}


export default function CardApresentation({ title, description }: Props) {
    return (
        <div className="card-apresentation">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}