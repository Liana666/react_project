import img from './s.png';
function Header() {
    return (
        <header>
            <div className="header__container">
                <ul className="header__list">
                    <li><a href="/">Main</a></li>
                    <li><a href="/covid">Covid</a></li>
                    <li><a href="/input">Input</a></li>
                    <li><a href="/movie">Movie</a></li>
                </ul>
                <div className="header__search">
                    <input type="text" />
                    <div className='header__search-btn'><img src={img} /></div>
                </div>
            </div>
        </header>
    )
}

export default Header;