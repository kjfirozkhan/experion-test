import HeaderRightBlock from '../headerRightBlock/HeaderRightBlock';
import './header.scss';

const Header = props => {
    return (
        <header className='header'>
            <h1>Hi John!</h1>
            <HeaderRightBlock/>
        </header>
    )
}

export default Header;