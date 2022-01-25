const Main = () => {
    return (
        <main id='home'>
            <img className='mainBackground' src={process.env.PUBLIC_URL + '/img/DavutGoeren.jpg'} alt='Portraitfoto von Davon Gören' />
            <div className='mainContent'>
                <p>Rechtsanwalt</p>
                <h1>Davut Gören</h1>
                <p><mark>Kompetente und effiziente<br />Rechtsberatung. Gemeinsam finden wir eine Lösung.</mark></p>
                <div className='mainContent__link'>
                    <a href='#references'>Mehr erfahren</a>
                </div>
            </div>
        </main>
    );
}

export default Main;