const toggleMobileMenu = () => {
    document.getElementById('hamburger-icon').classList.toggle('open');
}

const MobileNav = () => {
    return (
        <div id='hamburger-icon' onClick={toggleMobileMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <ul className="mobile-menu">
                <li><a href='#home'>Home</a></li>
                <li><a href='#references'>Referenzen</a></li>
                <li><a href='#law'>Rechtsgebiete</a></li>
                <li><a href='#lawfirm'>Kanzlei</a></li>
                <li><a href='#contact'>Kontakt</a></li>
            </ul>
        </div>
    );
}

export default MobileNav;