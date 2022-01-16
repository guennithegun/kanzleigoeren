const Company = () => {
    return (
        <section id='company'>
            <div className='company'>
                <div className='company__headline'>
                    <h2>Kanzlei</h2>
                </div>
                <div className='company__content'>
                    <div className='company__content-text'>
                        <p>
                            Herr Davut Gören ist seit 2018 als Rechtsanwalt tätig. Nach seiner kaufmännischen Ausbildung absolvierte Herr Gören sein Studium an der Christian-Albrechts-Universität zu Kiel. 
                        </p>
                        <p>
                            Rechtsanwalt Gören hat seinen Schwerpunkt im Allgemeinen Zivilrecht, Arbeitsrecht, Miet- und Wohnungseigentumsrecht sowie Verkehrsrecht. Zur weiteren Spezialisierung absolvierte Rechtsanwalt Gören 2020 erfolgreich  den Fachanwaltslehrgang  für Arbeitsrecht, um ein breites Spektrum an individual- und kollektivarbeitsrechtliche Themen zu bearbeiten. 
                        </p>
                        <p>
                            Er ist verheiratet und Vater von drei Kindern. 
                        </p>
                    </div>
                    <div className='company__content-image'>
                        <img src={process.env.PUBLIC_URL + '/DavutGoeren_whiteBackground.jpg'} alt='Davut Gören Portrait mit weißem Hintergrund' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Company;