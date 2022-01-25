const Downloads = () => {
    return (
        <section id='downloads'>
            <div className='downloads'>
                <div className='downloads__headline'>
                    <h2>Downloads</h2>
                </div>
                <div className='downloads__content'>
                    <a href={process.env.PUBLIC_URL + '/Vollmacht.pdf'} download>
                        <img src={process.env.PUBLIC_URL + '/img/download.svg'} alt='Download icon' />
                        <span>Vollmacht</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Downloads;