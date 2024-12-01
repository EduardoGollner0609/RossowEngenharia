import './styles.css';

type Props = {
    imgUrl: string;
    description: string;
    closeZoomFunction: () => void
}

export default function CardServiceZoom({ imgUrl, description, closeZoomFunction }: Props) {

    function closeZoom() {
        closeZoomFunction();
    }

    return (
        <div className="background-service-example-zoom" >
            <div className="card-service-example-zoom">
                <div className="card-service-example-close">
                    <p onClick={closeZoom}>X</p>
                </div>

                <div className="card-service-example-zoom-img">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="card-service-example-description">
                    <p>{description}
                    </p>
                </div>


            </div>
        </div >
    );
}