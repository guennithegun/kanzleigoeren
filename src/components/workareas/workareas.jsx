const WorkAreas = () => {
    return (
        <section id='law'>
            <div className='law'>
                <div className='law__headline'>
                    <h2>Rechtsgebiete</h2>
                </div>
                <div className='law__elements'>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/img/handshake.svg'} alt='Händeschütteln' />
                        <h3>Allgemeines Zivilrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/img/people-outline.svg'} alt='Icon das zwei Oberkörper zeigt' />
                        <h3>Arbeitsrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/img/home.svg'} alt='Haus' />
                        <h3>Miet- und Wohnungseigentumsrecht</h3>
                    </div>
                    <div className='law__elements-item'>
                        <img src={process.env.PUBLIC_URL + '/img/car.svg'} alt='Auto' />
                        <h3>Verkehrsrecht</h3>
                    </div>
                </div>
                <div className='law__elements-description'>
                    <p>
                        Als Ihr Anwalt unterstütze und berate ich Sie zu sämtlichen Fragen und Problemstellungen, die das Zivilrecht betreffen. Mir ist ein zentrales Anliegen, Sie hier nicht nur mit fundiertem Wissen zu beraten zu vertreten, sondern schnelle und unkomplizierte Lösungen für Ihre persönlichen Bedürfnisse zu entwickeln. Zur Vermeidung von Kosten strebe ich dabei zunächst immer eine außergerichtliche Lösung an, vertrete Sie aber natürlich auch deutschlandweit vor den Zivilgerichten.
                    </p>
                    <p>
                        Im Allgemeinen Zivilrecht vertrete ich Sie gerne Sie auf den Gebieten des Arbeitsrechts, Miet- und Wohnungseigentumsrecht sowie Verkehrsrecht.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WorkAreas;