const WorkAreas = () => {
    return (
        <section id='law'>
            <div className='law'>
                <div className='law__headline'>
                    <h2>Rechtsgebiete</h2>
                </div>
                <div className='law__elements'>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/handshake.svg'} alt='Händeschütteln' />
                        <h3>Allgemeines Zivilrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/people-outline.svg'} alt='Icon das zwei Oberkörper zeigt' />
                        <h3>Arbeitsrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/home.svg'} alt='Haus' />
                        <h3>Miet- und Wohnungseigentumsrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/car.svg'} alt='Auto' />
                        <h3>Verkehrsrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/earth.svg'} alt='Globus' />
                        <h3>Ausländerrecht</h3>
                    </div>
                </div>
                <div className='law__elements-description'>
                    <p>
                        Rechtsanwalt Davut Gören berät Sie auf den Gebieten des allgemeinen Zivilrechts, des Arbeitsrechts, Miet- und Wohnungseigentumsrecht, Verkehrsrecht sowie Ausländerrecht.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WorkAreas;