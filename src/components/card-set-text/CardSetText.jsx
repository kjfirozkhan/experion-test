import './cardsettext.scss';

const CardSetText = props => {
    return (
        <div className="card-bottom-wrap">
            <h3>{props.title}</h3>
            <h5>{props.description}</h5>
            <strong>{props.price}</strong>
        </div>
    )
}

export default CardSetText;