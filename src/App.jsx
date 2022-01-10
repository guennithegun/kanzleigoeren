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

  const mainBackground = {
    //backgroundImage: `url(${process.env.PUBLIC_URL + '/flensburgNacht.jpg'})`,
    //backgroundRepeat: 'none',
    //backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

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
      <main style={mainBackground}>
        <div>
          <p>Rechtsanwalt</p>
          <h1>Davut Gören</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
      </main>
    </div>
  );
}

export default App;