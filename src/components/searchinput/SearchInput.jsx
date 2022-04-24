import './searchinput.scss';

const SearchInput = props => {
    return (
        <div className='formgroup'>
            <input type="text" className='searchinput' placeholder="Search for products, brands and more"></input>
            <span className='searchicon'>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#041131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 19L14.65 14.65" stroke="#041131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div>
    )
}

export default SearchInput;