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
                        <mark>
                            Vor d. Kuppe 40<br />
                            24943 Flensburg
                        </mark>
                    </p>
                </div>
                <div className='contact__content-item'>
                <img src={process.env.PUBLIC_URL + '/img/phone.svg'} alt="Telefon" />
                    <p><mark><a href='tel:+4946140681173'>+49 461 40681173</a></mark></p>
                </div>
                <div className='contact__content-item'>
                    <img src={process.env.PUBLIC_URL + '/img/mail-outline.svg'} alt="Briefumschlag" />
                    <p><mark><a href='mailto:info@kanzleigoeren.de'>info@kanzleigoeren.de</a></mark></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;