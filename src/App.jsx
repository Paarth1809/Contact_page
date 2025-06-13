import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Contactheader from './components/ContactHeader/Contactheader'
import Navigation from './components/NAvigation/Navigation'

function App() {
  return <div>
    <Navigation />

    <main className='main_container'>
    <Contactheader />
    <ContactForm />
    </main>

  </div>
}

export default App
