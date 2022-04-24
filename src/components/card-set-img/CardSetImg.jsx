import './cardsetimg.scss';

const CardSetImg = props => {
    return (
        <div className="img-block">
            <img src={process.env.PUBLIC_URL + '/' + props.image} />
        </div>
    )
}

export default CardSetImg;