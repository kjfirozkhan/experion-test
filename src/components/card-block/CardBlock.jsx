import CardSet from '../card-set/CardSet';
import './cardblock.scss';

const ITEMS = [
    {
        image: 'assets/images/img-1.jpg',
        title: 'Bond Street By Red Tape Remixa Sneakers',
        description: 'Men Crater Remixa Sneakers',
        price: 'Rs.5467',
        is_favorite: false
    },
    {
        image: 'assets/images/img-2.jpg',
        title: 'Puma',
        description: 'Men Crater Remixa Sneakers',
        price: 'Rs.6499',
        is_favorite: false
    },
    {
        image: 'assets/images/img-3.jpg',
        title: 'Vero Moda',
        description: 'Women Crater Remixa Sneakers',
        price: 'Rs.2767',
        is_favorite: true
    },
    {
        image: 'assets/images/img-4.jpg',
        title: 'Carnatia W Running Shoes For Women',
        description: 'Men Crater Remixa Sneakers',
        price: 'Rs.3734',
        is_favorite: false
    },
    {
        image: 'assets/images/img-5.jpg',
        title: 'Vero Moda',
        description: 'Women Black Solid One Dri-Fit Tights',
        price: 'Rs.5467',
        is_favorite: false
    },
    {
        image: 'assets/images/img-6.jpg',
        title: 'WROGN',
        description: 'Women Crater Remixa Sneakers',
        price: 'Rs.3834',
        is_favorite: false
    },
    {
        image: 'assets/images/img-7.jpg',
        title: 'ADIDAS',
        description: 'Men Crater Remixa Sneakers',
        price: 'Rs.3734',
        is_favorite: false
    },
    {
        image: 'assets/images/img-8.jpg',
        title: 'Mast &Harbour',
        description: 'Men Crater Remixa Sneakers',
        price: 'Rs.3734',
        is_favorite: false
    },
];

const CardBlock = props => {
    const itemlist = ITEMS.map(item => <CardSet image={item.image} title={item.title} description={item.description} price={item.price} is_favorite={item.is_favorite}/>);
    return (
        <div className='card-block-wrap clearfix'>
            {itemlist}
        </div>
    )
}

export default CardBlock;