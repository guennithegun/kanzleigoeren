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
                            Seit 2018 bin ich als Rechtsanwalt tätig. Nach einer kaufmännischen Ausbildung absolvierte ich an der Christian-Albrechts-Universität zu Kiel das Studium der Rechtswissenschaften.
                        </p>
                        <p>
                            Schwerpunktmäßig berate ich Sie zu allen Fragen rund um das Arbeitsrecht. Zur Vertiefung meiner Kenntnisse absolvierte ich 2020 erfolgreich den Fachanwaltslehrgang für Arbeitsrecht, um ein breiteres Spektrum an individual- und kollektivarbeitsrechtlichen Themen bearbeiten und Sie optimal beraten zu können.
                        </p>
                        <p>
                            Daneben berate ich Sie sehr gerne in den Bereichen des allgemeinen Zivilrechts, Miet- und Wohnungseigentumsrechts sowie Verkehrsrechts.
                        </p>
                        <p>
                            Ich bin verheiratet und Vater von drei Kindern. 
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