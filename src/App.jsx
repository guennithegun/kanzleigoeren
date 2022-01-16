import Navigation from './components/navigation/navigation';
import MobileNav from './components/navigation/mobileNavigation';
import Logo from './components/logo/logo';
import ContactButton from './components/buttons/contactButton/contactButton';
import { useState } from 'react';

function App() {
  // styles
  const headerStyles = {
    width: '100%',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 25px',
    boxShadow: '0px 5px 10px -10px #111'
  };

  const logoWrapperStyles = {
    width: '100%',
    height: '90px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    zIndex: '-1'
  };

  //states
  const [contactButtonText, setContactButtonText] = useState('Kontakt aufnehmen');

  return (
    <div className="App">
      <header className="pageHeader" style={headerStyles} >
        <Navigation />
        <MobileNav />
        <ContactButton contactText={contactButtonText} />
      </header>
      <div className='logoWrapper' style={logoWrapperStyles}>
        <Logo />
      </div>
      <main>
        <img className='mainBackground' src={process.env.PUBLIC_URL + '/DavutGoeren.jpg'} />
        <div className='mainContent'>
          <p>Rechtsanwalt</p>
          <h1>Davut Gören</h1>
          <p>Kompetente und effiziente Rechtsberatung. Gemeinsam finden wir eine Lösung.</p>
          <div className='mainContent__link'>
            <a href='#referenzen'>Mehr erfahren</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;