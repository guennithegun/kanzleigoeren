const Contact = () => {
    return (
        <section id='contact'>
            <div className='contact'>
                <div className='contact__headline'>
                    <h2>Kontakt</h2>
                </div>
            </div>
            <div className='contact__content'>
                <div className='contact__content-item'>
                    <img src={process.env.PUBLIC_URL + '/img/location-pin.svg'} alt="Stecknadel Karte" />
                    <p>
                        Vor d. Kuppe 40<br />
                        24943 Flensburg
                    </p>
                </div>
                <div className='contact__content-item'>
                <img src={process.env.PUBLIC_URL + '/img/phone.svg'} alt="Telefon" />
                    <p><a href='tel:+4946140681173'>+49 461 40681173</a></p>
                </div>
                <div className='contact__content-item'>
                    <img src={process.env.PUBLIC_URL + '/img/mail-outline.svg'} alt="Briefumschlag" />
                    <p><a href='mailto:info@kanzleigoeren.de'>info@kanzleigoeren.de</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;