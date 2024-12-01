import { useState } from 'react';
import './styles.css'
import CardServiceZoom from '../CardServiceZoom';


type Props = {
    imgUrl: string;
    description: string;
}

export default function CardService({ imgUrl, description }: Props) {

    const [serviceItemZoom, setServiceIemZoom] = useState(false);

    function openZoom() {
        setServiceIemZoom(true);
    }

    function closeZoom() {
        setServiceIemZoom(false);
    }

    return (
        <>
            <div className="card-service-item" onClick={openZoom}>
                <img src={imgUrl} alt="" />
                <p>{description}</p>
            </div>
            {
                serviceItemZoom &&
                <CardServiceZoom imgUrl={imgUrl}
                    description={description}
                    closeZoomFunction={closeZoom}
                />
            }
        </>

    );
}