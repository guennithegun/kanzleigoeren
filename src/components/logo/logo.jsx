function Logo() {
    const imageStyle = {
        width: '250px'
    };
    return (
        <img src={process.env.PUBLIC_URL + '/kanzlei-logo.jpg'} alt="Kanzlei Gören mit rotem Rand" className='kanzleiLogo'  />
    );
}

export default Logo;