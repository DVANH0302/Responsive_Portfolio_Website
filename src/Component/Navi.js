import './style_for_navi.css';
function Navi() {
  return (
    <nav className='nav'>
        <a href = "/" className='site-title'>NavBar</a>
        <ul>
            <li className='active'>
                <a href = "/">Home</a>
            </li>
            <li>
                <a href = "/contact" >Contact</a>
            </li>

        </ul>

    </nav>
  );
}

export default Navi;