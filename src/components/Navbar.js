import './Navbar.css';

const Navbar = ({onSetIsClicked}) =>{
        const clickedHandle = () =>{
            onSetIsClicked(1);
        }
        return(
            <div className="Navbar">
                <ul>
                <li><a className="store" href="index.html">LetsGrowMore</a></li>
                <button onClick={clickedHandle} className="button button1">Get Users</button>
                </ul>

            </div>
        )
}
export default Navbar;