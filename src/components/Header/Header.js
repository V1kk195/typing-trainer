import './Header.css';

function Header() {
    return (
        <nav className="header navbar navbar-expand navbar-dark bg-primary rounded">
            <div className="container">
                <a className="navbar-brand" href="#">Typing Trainer</a>
                <ul className="navbar-nav flex-row nav-fill">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Тренажёр</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Тестирование</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;