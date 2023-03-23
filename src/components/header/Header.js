import logo from "../../img/Ticket.png";
import "./header.css";
 
const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <img src={logo} alt="" className="logo" />
                <h1 className="header__slogan">
                    Let's choose film <br />
                    for you
                </h1>
            </div>
        </header>

     );
}
 
export default Header;