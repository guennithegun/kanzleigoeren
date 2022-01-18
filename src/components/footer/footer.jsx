import ImprintContent from './imprint';

const Footer = () => {

    const toggleModal = () => {
        document.getElementById('modal').classList.toggle('openImprint');
    }

    return (
        <footer>
            <div className='socialMedia'>
                <div>
                    <a href='https://www.xing.com/profile/Davut_Goeren2'><img src={process.env.PUBLIC_URL + '/xing128.png'} alt="Xing Icon" /></a>
                    <a href='https://de.linkedin.com/in/davut-gören-873b931b3'><img src={process.env.PUBLIC_URL + '/linkedin128.png'} alt="LinkedIn Icon" /></a>
                </div>
            </div>
            <div className='imprint'>
                <div className='imprintModal'>
                    <button id='openModal' onClick={toggleModal}>Impressum/Datenschutzerklärung</button>
                </div>
                <div id='modal' className='imprint__content'>
                    <div className='imprint__content-close'>
                        <img id='close' src={process.env.PUBLIC_URL + '/cross-solid.svg'} alt='Kreuz zum schließen' onClick={toggleModal} />
                    </div>
                    <div className='imprint__headline'>
                        <h2>Impressum und Datenschutz</h2>
                    </div>
                    <ImprintContent />
                </div>
            </div>
        </footer>
    );
}

export default Footer;