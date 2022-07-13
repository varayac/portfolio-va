import Footer from './layout/Footer'
import Header from './layout/NavBar'
import Main from './layout/MainContent'

function App() {
  return (
    <div className=' container mx-auto px-2 flex flex-col h-screen justify-between'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
