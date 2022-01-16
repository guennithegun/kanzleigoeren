function ContactButton(props) {
    return (
        <a href="mailto:info@kanzleigoeren.de" className='contactLink' >
            <span>{props.contactText}</span>
            <img src={process.env.PUBLIC_URL + '/mail-outline.svg'} alt="Briefumschlag" />
        </a>
    );
}

export default ContactButton;