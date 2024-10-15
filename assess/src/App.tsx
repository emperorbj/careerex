
import './App.css'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Header from './components/Header'
import MessageUs from './components/MessageUs'
import Service from './components/Service'
import Sponsors from './components/Sponsors'
import Testimonies from './components/Testimonies'

function App() {


  return (
    <>
      <Header/>
      <AboutUs/>
      <Service/>
      <Testimonies/>
      <MessageUs/>
      <div className='h-[300px] md:h-[320px] 
      w-full'>
        <img className='object-cover w-full' src="/robotics.png" alt="" />
      </div>
      <Sponsors/>
      <Footer/>
    </>
  )
}

export default App
