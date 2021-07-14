import "./Header.css";

import ButtonMenu from "../../atoms/ButtonMenu/ButtonMenu";
import H1 from "../../atoms/H1/H1";
import Hr from "../../atoms/Hr/Hr";

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
    <Hr />
    </>
}

export default Header;