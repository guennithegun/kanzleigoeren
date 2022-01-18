const Logo = () => {
    return (
        <a href='#home'>
            <img src={process.env.PUBLIC_URL + '/kanzlei-logo.jpg'} alt="Kanzlei Gören mit rotem Rand" className='kanzleiLogo' />
        </a>
    );
}

export default Logo;