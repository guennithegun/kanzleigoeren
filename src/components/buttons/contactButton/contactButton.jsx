function ContactButton(props) {
    return (
        <a href="mailto:davut.goeren@kanzleigoeren.de" className='contactLink' >
            <span>{props.contactText}</span>
            <img src={process.env.PUBLIC_URL + '/mail-32.png'} alt="weißer Briefumschlag" />
        </a>
    );
}

export default ContactButton;