import './carticon.scss';

const CartIcon = props => {
    return (
        <a href="#" className='carticon'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20.0714L5.28 7.5H18.72L20 20.0714H4Z" stroke="black" stroke-width="1.5" />
                <path d="M15.4286 9.7857V6.35713C15.4286 4.46358 13.8935 2.92856 12 2.92856V2.92856C10.1064 2.92856 8.57141 4.46358 8.57141 6.35713V9.7857" stroke="black" stroke-width="1.5" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C15.7909 4 14 5.79086 14 8C14 10.2091 15.7909 12 18 12Z" fill="#FF1D00" />
            </svg>
        </a>
    )
}

export default CartIcon;