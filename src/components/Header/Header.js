import "./Header.css";

import ButtonMenu from "../ButtonMenu/ButtonMenu";
import H1 from "../H1/H1";

const Header = () => {
    return <>
    <header className="Header">
        <div className="buttonMenuDiv">
        <ButtonMenu />
        </div>
        <div>
        <H1>ScheTime</H1>
        </div>
        <div className="profileDiv">profile</div>
    </header>
    <hr />
    </>
}

export default Header;