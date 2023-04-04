import thisStye from './Nav.module.css';

function Nav () {
  return (
    <header className={thisStye.menuContainer}>
        <div></div>
        <ul>
            <li>
                <a>Link 1</a>
            </li>
            <li>
                <a>Link 2</a>
            </li>
        </ul>    
    </header>
  )
}

export default Nav;