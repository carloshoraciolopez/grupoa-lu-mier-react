import thisStyle from './Header.module.css';

function Header () {
    return (
        <header className={thisStyle.headerContainer}>
            <img src="" alt="logo"></img>
            <span>17:28</span>
        </header>
    );
}

export default Header;