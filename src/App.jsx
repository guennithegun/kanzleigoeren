import Navigation from './components/navigation/navigation';
import MobileNav from './components/navigation/mobileNavigation';
import Logo from './components/logo/logo';
import ContactButton from './components/buttons/contactButton/contactButton';
import Main from './components/main/main';
import References from './components/references/references';
import WorkAreas from './components/workareas/workareas';
import Company from './components/company/company';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  // styles
  const headerWrapper = {
    position: 'sticky',
    top: '0',
    zIndex: '1'
  };

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
    top: '0',
    /*zIndex: '-1',*/
    position: 'absolute',
    backgroundColor: 'white'
  };

  //states
  const contactButtonText = 'Kontakt aufnehmen';

  return (
    <div className="App">
      <div style={headerWrapper}>
        <header className="pageHeader" style={headerStyles} >
          <Navigation />
          <MobileNav />
          <ContactButton contactText={contactButtonText} />
        </header>
        <div className='logoWrapper' style={logoWrapperStyles}>
          <Logo />
        </div>
      </div>
      <Main />
      <References />
      <WorkAreas />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;