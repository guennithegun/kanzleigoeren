import Navigation from './components/navigation/navigation';
import MobileNav from './components/navigation/mobileNavigation';
import Logo from './components/logo/logo';
import ContactButton from './components/buttons/contactButton/contactButton';
import Main from './components/main/main';
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
  const contactButtonText = 'Kontakt aufnehmen';

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
      <Main />
    </div>
  );
}

export default App;