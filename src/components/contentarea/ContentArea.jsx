import CardBlock from '../card-block/CardBlock';
import ContentTopBlock from '../content-top-block/ContentTopBlock';
import Filterblock from '../filterblock/Filterblock';
import './contentarea.scss';

const ContentArea = props => {
    return (
        <div className='contentareawrap'>
            <Filterblock />
            <ContentTopBlock />
            <CardBlock />
        </div>
    )
}

export default ContentArea;